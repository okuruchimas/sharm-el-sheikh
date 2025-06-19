// hooks
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
// utils
import styled from '@emotion/styled';
// components
import Button from '../../../../layout/button';
import Dropdown from '../../../../layout/filters';
// types
import type { selectOption } from '../../../../types/filter';

interface PhotographersFiltersProps {
  selectedStyles?: string[];
  selectedLocations?: string[];
  stylesOptions: selectOption[];
  locationsOptions: selectOption[];
  onClose: () => void;
  onSave: ({
    styles,
    locations,
  }: {
    styles: Filter;
    locations: Filter;
  }) => Promise<void>;
}
type Filter = string[] | undefined;

const PhotographersFilters = ({
  onClose,
  selectedStyles,
  stylesOptions,
  locationsOptions,
  selectedLocations,
  onSave,
}: PhotographersFiltersProps) => {
  const [styles, setStyles] = useState<Filter>(selectedStyles);
  const [locations, setLocations] = useState<Filter>(selectedLocations);
  const [otherStyle, setOtherStyle] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('entertainers-tour-guides');
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

  const handleSave = () =>
    onSave({
      styles: otherStyle ? [...(styles || []), otherStyle] : styles,
      locations: otherLocation
        ? [...(locations || []), otherLocation]
        : locations,
    });

  const handleStyleSelect = (key: string) => {
    setStyles(prev =>
      prev?.includes(key)
        ? prev.filter(el => el !== key)
        : [...(prev || []), key],
    );
  };

  const handleLocationSelect = (key: string) => {
    setLocations(prev =>
      prev?.includes(key)
        ? prev.filter(el => el !== key)
        : [...(prev || []), key],
    );
  };

  const stylesCheckBoxes = stylesOptions.slice(0, 6);
  const stylesDropdown = stylesOptions.slice(6, stylesOptions.length);
  const locationsCheckBoxes = locationsOptions.slice(0, 6);
  const locationsDropdown = locationsOptions.slice(6, stylesOptions.length);
  return (
    <Wrap ref={formRef}>
      <Section>
        <SectionTitle>{t('tourGuidesFilters.photographyStyles')}</SectionTitle>
        {stylesCheckBoxes.map(({ key, value }) => (
          <CheckboxLabel key={value}>
            <input
              type="checkbox"
              name={'photographyStyles'}
              onChange={() => handleStyleSelect(key)}
              checked={!!styles?.includes(key)}
            />
            {value}
          </CheckboxLabel>
        ))}
        {stylesDropdown.length ? (
          <Dropdown
            options={[
              { key: '', value: t('tourGuidesFilters.otherStyle') },
              ...stylesDropdown,
            ]}
            onChange={option => setOtherStyle(option.key)}
            width="100%"
            height="56px"
          />
        ) : null}
      </Section>
      <Section>
        <SectionTitle>{t('tourGuidesFilters.workLocations')}</SectionTitle>
        {locationsCheckBoxes.map(({ key, value }) => (
          <CheckboxLabel key={value}>
            <input
              type="checkbox"
              name={'workLocations'}
              onChange={() => handleLocationSelect(key)}
              checked={!!locations?.includes(key)}
            />
            {value}
          </CheckboxLabel>
        ))}
        {locationsDropdown.length ? (
          <Dropdown
            options={[
              { key: '', value: t('tourGuidesFilters.otherLocation') },
              ...locationsDropdown,
            ]}
            onChange={option => setOtherLocation(option.key)}
            width="100%"
            height="56px"
          />
        ) : null}
      </Section>
      <Actions>
        <Button
          onClick={onClose}
          color="blue"
          backgroundColor="transparent"
          text={tCommon('buttons.cancel')}
        />
        <Button
          onClick={handleSave}
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

export default PhotographersFilters;
