// hooks
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
// utils
import styled from '@emotion/styled';
// components
import Button from '../button';
// types
import type { selectOption } from '../../types/filter';

type Filter = string[] | undefined;
interface CategoriesFilterProps {
  title: string;
  selectedCategories?: string[];
  categoriesOptions: selectOption[];
  onClose: () => void;
  onSave: (categories: Filter) => Promise<void>;
}

const CategoriesFilter = ({
  title,
  categoriesOptions,
  selectedCategories,
  onSave,
  onClose,
}: CategoriesFilterProps) => {
  const [categories, setCategories] = useState<Filter>(selectedCategories);

  const formRef = useRef<HTMLDivElement>(null);
  const { t: tCommon } = useTranslation('common');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategorySelect = (key: string) => {
    setCategories(prev =>
      prev?.includes(key)
        ? prev.filter(el => el !== key)
        : [...(prev || []), key],
    );
  };

  return (
    <Wrap ref={formRef}>
      <Section>
        <SectionTitle>{title}</SectionTitle>
        {categoriesOptions.map(({ key, value }) => (
          <CheckboxLabel key={value}>
            <input
              type="checkbox"
              name={'photographyStyles'}
              onChange={() => handleCategorySelect(key)}
              checked={!!categories?.includes(key)}
            />
            {value}
          </CheckboxLabel>
        ))}
      </Section>
      <Actions>
        <Button
          onClick={onClose}
          color="blue"
          backgroundColor="transparent"
          text={tCommon('buttons.cancel')}
        />
        <Button
          onClick={() => onSave(categories)}
          color="blue"
          text={tCommon('buttons.save')}
        />
      </Actions>
    </Wrap>
  );
};

const Wrap = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '16px',
  width: '100%',
  maxWidth: '854px',
  backgroundColor: theme.colors.white,
  borderRadius: '16px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',

  [theme.breakpoints.mobile]: {
    padding: '16px',
  },
}));

const Section = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: 16,
});

const SectionTitle = styled('h4')(({ theme }) => ({
  flexBasis: '100%',
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.black,
  fontWeight: 600,
  marginBottom: 8,
}));

const CheckboxLabel = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'calc((100% - 48px) / 4)',
  padding: 14,
  gap: 16,
  fontSize: theme.fontSize.fontS16,

  'input:checked': {
    accentColor: theme.colors.yellow,
  },

  [theme.breakpoints.mobile]: {
    width: 'calc((100% - 16px) / 2)',
    padding: 12,
  },
}));

const Actions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',

  [theme.breakpoints.mobile]: {
    button: {
      minWidth: 'calc((100% - 12px) / 2)',
    },
    gap: '12px',
  },
}));

export default CategoriesFilter;
