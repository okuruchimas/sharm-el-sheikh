import dayjs, { type Dayjs } from 'dayjs';
import { useFormik, Formik, Form } from 'formik';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';
// hooks
import { useTranslation } from 'next-i18next';
// components
import Modal from '../modal';
import Button from '../button';
import Dropdown from './index';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// providers
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// constants
import { WEEK_DAYS } from '../../../constants/week-days.constants';
// utils
import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';
// types
import type { selectOption } from '../../types/filter';

export type TaxiFilterFormI = {
  availableNow?: boolean;
  availableLater?: boolean;
  day?: string;
  from?: Dayjs;
  to?: Dayjs;
  carClasses?: string[];
  languageKeys?: string[];
};

interface Props {
  languageOptions: selectOption[];
  carClassOptions: selectOption[];
  defaultValues?: TaxiFilterFormI;
  onClose: () => void;
  onSubmit: (values: TaxiFilterFormI) => void;
}
const TaxiFilterForm = ({
  languageOptions,
  carClassOptions,
  defaultValues,
  onClose,
  onSubmit,
}: Props) => {
  const [otherLang, setOtherLang] = useState<selectOption>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<'from' | 'to'>();
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

  const langCheckBoxes = languageOptions.slice(0, 6);
  const langDropdown = languageOptions.slice(6, languageOptions.length);
  const handleFormSubmit = (values: TaxiFilterFormI) =>
    onSubmit(
      otherLang?.key
        ? {
            ...values,
            languageKeys: [...(values.languageKeys || []), otherLang.key],
          }
        : values,
    );
  const initialValues = {
    availableNow: !!defaultValues?.availableNow,
    availableLater: !!defaultValues?.availableLater,
    carClasses: defaultValues?.carClasses || [],
    languageKeys: defaultValues?.languageKeys || [],
    day: defaultValues?.day,
    to: defaultValues?.to,
    from: defaultValues?.from,
  };
  const { setFieldValue, handleSubmit, handleChange, values } =
    useFormik<TaxiFilterFormI>({
      initialValues,
      onSubmit: handleFormSubmit,
    });

  const handleCheckBoxChange =
    (fieldName: 'languageKeys' | 'carClasses', key: string) => () => {
      setFieldValue(
        fieldName,
        values[fieldName]?.includes(key)
          ? values[fieldName]?.filter(el => el !== key)
          : [...(values[fieldName] || []), key],
      );
    };

  const handleNowChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setFieldValue('availableLater', false);
    setFieldValue('to', undefined);
    setFieldValue('from', undefined);
  };
  const handleLaterChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setFieldValue('availableNow', false);
  };
  const handleDayChange = (option: selectOption) => {
    if (option.key.length) {
      setFieldValue('availableNow', false);
      setFieldValue('availableLater', true);
    }

    setFieldValue('day', option.key.length ? option.key : undefined);
  };

  const handleSetTime = (value: Dayjs | null) => {
    if (selectedTimeSlot) {
      setFieldValue(selectedTimeSlot, dayjs(value));
    }
    setFieldValue('availableNow', false);
    setFieldValue('availableLater', true);
    setSelectedTimeSlot(undefined);
  };

  const weekDaysOptions = WEEK_DAYS.map(({ key, value }) => ({
    key: value,
    value: tCommon(key),
  }));

  const muiTheme = createTheme({
    palette: {
      primary: {
        main: '#FFC01B',
      },
    },
  });

  const timePickerLocales = {
    cancelButtonLabel: tCommon('buttons.cancel'),
    okButtonLabel: tCommon('buttons.save'),
    toolbarTitle: t('selectTime'),
  };

  return (
    <Wrap ref={formRef}>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        <FormWrapper onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>{t('taxiFilterForm.availability')}</SectionTitle>
            <CheckboxLabel style={{ width: 'unset' }}>
              <input
                type="checkbox"
                name="availableNow"
                onChange={handleNowChange}
                checked={values['availableNow']}
              />
              {t('taxiFilterForm.availableNow')}
            </CheckboxLabel>
            <CheckboxLabel style={{ width: 'unset' }}>
              <input
                type="checkbox"
                name="availableLater"
                onChange={handleLaterChange}
                checked={values['availableLater']}
              />
              {t('taxiFilterForm.availableLater')}
            </CheckboxLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePickerWrapper>
                <Dropdown
                  options={[
                    { key: '', value: tCommon('text.selectDay') },
                    ...weekDaysOptions,
                  ]}
                  initialValue={
                    initialValues.day
                      ? weekDaysOptions.find(el => el.key === initialValues.day)
                      : undefined
                  }
                  onChange={handleDayChange}
                  width="100%"
                  height="56px"
                />
                <ThemeProvider theme={muiTheme}>
                  <TimeInputWrapper onClick={() => setSelectedTimeSlot('from')}>
                    <TimePicker
                      label={t('labels.from')}
                      name="from"
                      value={values.from || null}
                      readOnly
                      onOpen={() => setSelectedTimeSlot('from')}
                    />
                  </TimeInputWrapper>
                  <TimeInputWrapper
                    onClick={
                      values.from ? () => setSelectedTimeSlot('to') : undefined
                    }
                  >
                    <TimePicker
                      label={t('labels.to')}
                      name="to"
                      value={values.to || null}
                      readOnly
                      disabled={!values.from}
                    />
                  </TimeInputWrapper>
                  <Modal
                    isOpen={!!selectedTimeSlot}
                    onClose={() => setSelectedTimeSlot(undefined)}
                    width="340px"
                    mWidth="90%"
                  >
                    <PickerWrapper>
                      <StaticTimePicker
                        defaultValue={
                          (selectedTimeSlot === 'from'
                            ? values.from
                            : values.to || values.from?.add(1, 'minute')) ||
                          dayjs(new Date())
                        }
                        onAccept={handleSetTime}
                        onClose={() => setSelectedTimeSlot(undefined)}
                        localeText={timePickerLocales}
                      />
                    </PickerWrapper>
                  </Modal>
                </ThemeProvider>
              </TimePickerWrapper>
            </LocalizationProvider>
          </Section>
          <Section>
            <SectionTitle>{t('taxiFilterForm.carClass')}</SectionTitle>
            {carClassOptions.map(({ key, value }) => (
              <CheckboxLabel key={value}>
                <input
                  type="checkbox"
                  name="carClasses"
                  onChange={handleCheckBoxChange('carClasses', key)}
                  checked={values.carClasses?.includes(key)}
                />
                {value}
              </CheckboxLabel>
            ))}
          </Section>
          <Section>
            <SectionTitle>{t('taxiFilterForm.languagesSpoken')}</SectionTitle>
            {langCheckBoxes.map(({ key, value }) => (
              <CheckboxLabel key={value}>
                <input
                  type="checkbox"
                  name={'languageKeys'}
                  onChange={handleCheckBoxChange('languageKeys', key)}
                  checked={values.languageKeys?.includes(key)}
                />
                {value}
              </CheckboxLabel>
            ))}
            {langDropdown.length ? (
              <Dropdown
                options={[
                  { key: '', value: t('taxiFilterForm.otherLanguages') },
                  ...langDropdown,
                ]}
                onChange={setOtherLang}
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
              type="submit"
              color="blue"
              text={tCommon('buttons.save')}
              disabled={values.availableLater && !values.day && !values.from}
            />
          </Actions>
        </FormWrapper>
      </Formik>
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

const FormWrapper = styled(Form)({
  display: 'grid',
  gap: 24,
});

const PickerWrapper = styled('div')({
  '& .Mui-selected.MuiPickersToolbarText-root': {
    backgroundColor: '#B6D5DB',
  },

  '.MuiPickersToolbarText-root': {
    borderRadius: '8px',
    padding: '8px',
  },

  '.MuiTimePickerToolbar-separator': {
    padding: 0,
  },

  '& .MuiTimePickerToolbar-ampmLabel': {
    borderRadius: '8px',
    padding: '6px',
    fontSize: '16px',
  },

  '.MuiTimePickerToolbar-hourMinuteLabel': {
    alignItems: 'center',
  },
});

const TimeInputWrapper = styled('div')(({ theme }) => ({
  width: '100%',

  '.MuiInputBase-root': {
    borderRadius: '12px',
    borderColor: theme.colors.black,
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

const TimePickerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexBasis: '100%',

  gap: '8px',
  alignItems: 'center',

  '.modal-window': {
    padding: '0',
  },

  '.MuiFormControl-root': {
    width: '100%',
  },

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    gap: '12px',
  },
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
export default TaxiFilterForm;
