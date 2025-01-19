// hooks
import { useState } from "react";
// components
import Modal from "../../../../layout/modal";
import AnimationCompanyCard from "../animation-company-card";
import AnimationCompanyPopup from "../animation-company-popup";
// utils
import styled from "@emotion/styled";
// types
import type { AnimationCompanyPreviewFragment } from "../../../../../gql/graphql";

type AnimationCompaniesProps = {
  companies: AnimationCompanyPreviewFragment[];
};

const AnimationCompanies = ({ companies }: AnimationCompaniesProps) => {
  const [selectedCompany, setSelectedCompany] =
    useState<AnimationCompanyPreviewFragment>();
  const handleCardClick = (data: AnimationCompanyPreviewFragment) => () => {
    setSelectedCompany(data);
  };

  const handlePopupClose = () => setSelectedCompany(undefined);

  return (
    <>
      <CardsWrapper>
        {companies.map((el) => (
          <AnimationCompanyCard
            key={el.value}
            imgSrc={
              el.image?.data?.attributes?.url ||
              "/images/background/background-prom.svg"
            }
            title={el.value}
            averageRating={el.averageRating || 0}
            totalComments={el.totalComments || 0}
            onClick={handleCardClick(el)}
          />
        ))}
      </CardsWrapper>
      {selectedCompany ? (
        <Modal
          isOpen={!!selectedCompany?.slug}
          onClose={handlePopupClose}
          mWidth="90%"
        >
          <AnimationCompanyPopup
            companyPreview={selectedCompany}
            onClose={handlePopupClose}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default AnimationCompanies;

const CardsWrapper = styled("div")(({ theme }) => ({
  // TODO: fix styles
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
  },
}));
