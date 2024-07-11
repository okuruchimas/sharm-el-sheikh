//components
import PromCard from "./children/prom-card";
import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";
import Dropdown from "../../layout/filters";
import Background from "./children/background";
import Title from "../../layout/title";
//utils
import styled from "@emotion/styled";
//types
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

const Promotions = ({ promCards }: PromCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <Title>Promotions and Discounts</Title>
        <FiltersWrap>
          <Dropdown options={sortArr} />
          <MobLink>
            <LinkButton text="View more" link="/" />
          </MobLink>
        </FiltersWrap>
      </TopWrap>
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
      {!promCards ? <Background /> : null}
      <ButtonWrap>
        <Button text="View more" color="white" />
      </ButtonWrap>
    </WrapSection>
  );
};

const WrapSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
});

const TopWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "normal",
    gap: "16px",
  },
}));

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
