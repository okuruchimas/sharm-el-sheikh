import { useTranslation } from 'next-i18next';

const useTabs = () => {
  const { t } = useTranslation('entertainers-tour-guides');

  const tabsArr = [
    { type: 'animators', value: t('tabs.animators') },
    { type: 'taxi-drivers', value: t('tabs.taxiDrivers') },
    { type: 'photographers', value: t('tabs.photographers') },
    { type: 'tour-and-guides', value: t('tabs.tourOperators') },
  ];
  return { tabsArr };
};

export default useTabs;
