// components
import PromCard from "./children/prom-card";
import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";
import Dropdown from "../../layout/filters";
import Placeholder from "./children/placeholder";
import SectionWrapper from "../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
// types
import { PromCardProps } from "../../../pages/api/prom-cards";

const sortArr = [
  { display_value: "Monday", key: "monday" },
  { display_value: "Tuesday", key: "tuesday" },
  { display_value: "Wednesday", key: "wednesday" },
  { display_value: "Thursday", key: "thursday" },
  { display_value: "Friday", key: "friday" },
  { display_value: "Saturday", key: "saturday" },
  { display_value: "Sunday", key: "sunday" },
];

interface PromotionsProps extends PromCardProps {
  title: string;
  disableFilters?: boolean;
  disableViewMore?: boolean;
}

const Promotions = ({
  promCards,
  title,
  disableFilters = false,
  disableViewMore = false,
}: PromotionsProps) => {
  return (
    <SectionWrapper
      title={title}
      titleChildren={
        disableFilters ? null : (
          <FiltersWrap>
            <Dropdown options={sortArr} />
            <MobLink>
              <LinkButton text="View more" link="/" />
            </MobLink>
          </FiltersWrap>
        )
      }
      isColumn
    >
      <DownWrap>
        {promCards
          .slice(0, 3)
          .map(({ slug, discount, images, location, title }, index) => (
            <PromCard
              slug={slug}
              discount={discount}
              images={images}
              title={title}
              location={location}
              key={index}
            />
          ))}
      </DownWrap>
      {!promCards ? (
        <Placeholder title="Currently no discounts available" />
      ) : null}
      {disableViewMore ? null : (
        <ButtonWrap>
          <Button text="View more" backgroundColor="white" />
        </ButtonWrap>
      )}
    </SectionWrapper>
  );
};

const FiltersWrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MobLink = styled("div")(({ theme }) => ({
  "a, span": {
    display: "none",
  },

  [theme.breakpoints.mobile]: {
    "a, span": {
      display: "initial",
    },
  },
}));

const DownWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));

export default Promotions;
