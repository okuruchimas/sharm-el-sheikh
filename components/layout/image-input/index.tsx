import { useField, useFormikContext } from 'formik';
import styled from '@emotion/styled';
import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

interface Props {
  type: string;
  label?: string;
  maxFiles?: number;
}

const MultiImageInput = ({ type, label, maxFiles = 4 }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [field] = useField<File[]>(type);
  const { setFieldValue } = useFormikContext();
  const [previews, setPreviews] = useState<string[]>([]);
  const { t } = useTranslation('common');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      const newFiles = Array.from(files);
      const currentFiles = Array.isArray(field.value) ? field.value : [];

      const updatedFiles = [...currentFiles, ...newFiles];
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));

      setPreviews(prev => [...prev, ...newPreviews]);
      setFieldValue(type, updatedFiles);
    }
  };

  const handleRemove = (index: number) => {
    const updatedFiles = field.value?.filter((_, i) => i !== index) || [];
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFieldValue(type, updatedFiles);
    setPreviews(updatedPreviews);
  };

  const progress = `${field.value?.length || 0}/${maxFiles}`;

  return (
    <InputWrap>
      {label && <Label>{label}</Label>}

      <TopRow>
        <UploadButton
          type="button"
          disabled={(field.value?.length || 0) >= maxFiles}
          onClick={() => fileInputRef.current?.click()}
        >
          {'+ ' + t('buttons.download')}
        </UploadButton>
        <Progress isRed={field.value?.length > maxFiles}>{progress}</Progress>
      </TopRow>

      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image"
        multiple
        onChange={handleFileChange}
      />

      <Gallery>
        {previews.map((src, index) => (
          <PreviewBlock key={index}>
            <ImagePreview src={src} alt={`preview-${index}`} />
            <FileName>{(field.value?.[index] as File)?.name}</FileName>
            <DeleteIcon onClick={() => handleRemove(index)} />
          </PreviewBlock>
        ))}
      </Gallery>
    </InputWrap>
  );
};

export default MultiImageInput;

const TopRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
});

const Progress = styled.div<{ isRed?: boolean }>(({ theme, isRed }) => ({
  fontSize: theme.fontSize.fontS14,
  fontWeight: 500,
  color: isRed ? theme.colors.red : theme.colors.grey3,
}));

const InputWrap = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  position: 'relative',
});

const Label = styled('label')(({ theme }) => ({
  fontSize: theme.fontSize.fontS14 || 14,
  fontWeight: 500,
  color: theme.colors.black,
}));

const UploadButton = styled.button(({ theme }) => ({
  border: `1px solid ${theme.colors.yellow}`,
  borderRadius: 12,
  padding: '8px 16px',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: theme.colors.blue,
  cursor: 'pointer',
  fontSize: theme.fontSize.fontS16,
  width: 'fit-content',
  height: 48,

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

const HiddenInput = styled.input({
  display: 'none',
});

const Gallery = styled.div({
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
});

const PreviewBlock = styled.div(({ theme }) => ({
  position: 'relative',
  width: '150px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 0 4px rgba(0,0,0,0.15)',
  [theme.breakpoints.mobile]: {
    width: '100%',
    height: 200,
  },
}));

const ImagePreview = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  [theme.breakpoints.mobile]: {
    height: 160,
  },
}));

const FileName = styled('div')({
  padding: '6px 40px 6px 8px',
  fontSize: '14px',
  fontWeight: 500,
  backgroundColor: '#fff',
  overflow: 'hidden',
  textWrap: 'nowrap',
  textOverflow: 'ellipsis',
});

const DeleteIcon = styled.div({
  backgroundImage: 'url(/icons/agents/delete.svg)',
  position: 'absolute',
  bottom: 6,
  right: 6,
  width: 24,
  height: 24,
  padding: 2,
  cursor: 'pointer',
});
