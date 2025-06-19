import { useState } from 'react';
import { useRouter } from 'next/router';
// utils
import { formatTime, getCurrentDayAndTime } from '../../utils/formateDate';
// constants
import { PAGE_CATEGORIES } from '../../constants/page-company-categories';
// components
import Modal from '../../components/layout/modal';
import Discount from '../../components/layout/discount';
import CompanyCard from '../../components/sections/promotions/children/company-card';
import CompanyPopupContainer from '../../components/sections/company/company-popup-container';
// types
import type { CompanyPreviewFragment } from '../../gql/graphql';

const useCompanyCard = (selectedDay?: string) => {
  const [selectedCompany, setSelectedCompany] =
    useState<CompanyPreviewFragment>();
  const [selectedDiscount, setSelectedDiscount] =
    useState<CompanyPreviewFragment>();
  const router = useRouter();

  const checkIfPage = (data: CompanyPreviewFragment): boolean =>
    !!data?.categories?.data.find(el =>
      PAGE_CATEGORIES.includes(el?.attributes?.key || '=(^_^)='),
    );

  const handleClosePopup = () => setSelectedCompany(undefined);

  const handleOpenDiscount = (data: CompanyPreviewFragment) => () =>
    setSelectedDiscount(data);

  const handleInfoWindowClick = (data: CompanyPreviewFragment) => () =>
    checkIfPage(data) ? router.push(data.slug) : setSelectedCompany(data);

  const handleCompanyCardClick =
    (data: CompanyPreviewFragment, isPage: boolean) => () =>
      isPage ? router.push(data.slug) : setSelectedCompany(data);

  const renderPopup = () =>
    selectedCompany?.slug ? (
      <Modal
        onClose={handleClosePopup}
        isOpen={!!selectedCompany?.slug}
        width="60%"
        mWidth="90%"
      >
        {selectedCompany?.slug ? (
          <CompanyPopupContainer
            clubPreview={selectedCompany}
            onClose={handleClosePopup}
          />
        ) : null}
      </Modal>
    ) : null;

  const renderDiscountPopup = () =>
    selectedDiscount?.discount ? (
      <Modal
        onClose={() => setSelectedDiscount(undefined)}
        isOpen={!!selectedDiscount?.discount}
        width="60%"
        mWidth="90%"
        maxWidth="876px"
      >
        <Discount
          position={selectedDiscount.position}
          location={selectedDiscount.location}
          discount={selectedDiscount.discount}
          socialLinks={selectedDiscount.socialLinks}
          onClose={() => setSelectedDiscount(undefined)}
        />
      </Modal>
    ) : null;

  const renderCard = (
    companyPreview: CompanyPreviewFragment,
    isHome: boolean = false,
  ) => {
    const { dayOfWeek } = getCurrentDayAndTime();

    const timeSlot = companyPreview?.schedule
      ? companyPreview.schedule.find(el =>
          el?.days.some(day => day?.day === (selectedDay || dayOfWeek)),
        ) || companyPreview.schedule[0]
      : undefined;

    const isPage = checkIfPage(companyPreview);

    const time = timeSlot?.workTime
      ? `${formatTime(timeSlot.workTime.startTime)} - ${formatTime(timeSlot.workTime.endTime)}`
      : undefined;

    if (!companyPreview) {
      return null;
    }

    return (
      <CompanyCard
        isHome={isHome}
        key={companyPreview.slug}
        discount={companyPreview.discount}
        images={companyPreview.images}
        title={companyPreview.title}
        location={companyPreview.location}
        time={time}
        averageRating={companyPreview.averageRating}
        totalComments={companyPreview.totalComments}
        handleClick={handleCompanyCardClick(companyPreview, isPage)}
        onOpenDiscount={() => {
          setSelectedDiscount(companyPreview);
        }}
      />
    );
  };

  return {
    renderCard,
    renderPopup,
    handleOpenDiscount,
    renderDiscountPopup,
    handleInfoWindowClick,
  };
};

export default useCompanyCard;
