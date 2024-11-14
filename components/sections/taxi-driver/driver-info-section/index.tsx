// hooks
import { useTranslation } from "next-i18next";
// components
import Image from "next/image";
import Flags from "../../../layout/flags";
import Rating from "../../../layout/rating";
import SocialIcon from "../../../layout/social-icon";
import TaxiStatus from "../../entertainers-tour-guides/taxi-drivers/statuses";
// constants
import { TAXI_STATUSES } from "../../../../constants/taxi-statuses.constants";
// utils
import styled from "@emotion/styled";
import { calculateStatus } from "../../../../utils/calculate-taxi-status";
// types
import type { ImageI } from "../../../types/image";
import type {
  TaxiDriver,
  TaxiDriverPreviewFragment,
  ComponentHelpersSocialMedia,
} from "../../../../gql/graphql";

type DriverInfoSectionProps = {
  name: string;
  imgSrs: string;
  languages: ImageI[];
  schedule: TaxiDriverPreviewFragment["schedule"];
  socialLinks: (ComponentHelpersSocialMedia | null)[];
  isNotWorking: boolean;
  totalComments: number;
  averageRating: number;
  preferences: TaxiDriver["preferences"];
};

const DriverInfoSection = ({
  name,
  imgSrs,
  schedule,
  languages,
  socialLinks,
  preferences,
  isNotWorking,
  totalComments,
  averageRating,
}: DriverInfoSectionProps) => {
  const { t } = useTranslation("driver");
  const { t: tCommon } = useTranslation("common");

  const status = calculateStatus({ isNotWorking, schedule });
  const statusI18nKey =
    TAXI_STATUSES.find((el) => el.status === status)?.i18nKey || "";

  const preferencesMarkup = preferences?.length ? (
    <div>
      <Preferences>{`${t("preferences")}:`}</Preferences>
      <List>
        {preferences.map((el, index) => (
          <li key={index}>{el?.value}</li>
        ))}
      </List>
    </div>
  ) : null;

  return (
    <Wrapper>
      <TopWrapper>
        <ImgWrapper>
          <Image src={imgSrs} alt={name} layout="fill" />
        </ImgWrapper>
        <TopStack>
          <StatusWrapper>
            <TaxiStatus text={t(statusI18nKey)} status={status} />
          </StatusWrapper>
          <NameRating>
            <h2>{name}</h2>
            <Rating points={averageRating} users={totalComments} />
          </NameRating>
          <OnlyMobile>{preferencesMarkup}</OnlyMobile>
          <Languages>
            <span>{`${tCommon("text.languagesSpoken")}:`}</span>
            <Flags icons={languages} />
          </Languages>
          <IconsWrapper>
            {socialLinks?.map((el, index) => (
              <SocialIcon
                key={index}
                iconSrc={el?.icon.data?.attributes?.url || ""}
                iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
                socialLink={el?.socialLink || ""}
              />
            ))}
          </IconsWrapper>
        </TopStack>
      </TopWrapper>
      <OnlyDesktop>{preferencesMarkup}</OnlyDesktop>
    </Wrapper>
  );
};

export default DriverInfoSection;

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",

  [theme.breakpoints.mobile]: {
    gap: "32px",
  },
}));

const Languages = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "24px",
  width: "100%",
  flexWrap: "wrap",
  alignItems: "center",
  margin: "40px 0 8px",

  span: {
    textWrap: "nowrap",
    color: theme.colors.blue,
    fontSize: theme.fontSize.fontS24,
  },

  [theme.breakpoints.mobile]: {
    margin: "0",
    gap: "16px",
    alignItems: "start",
    flexDirection: "column",
  },
}));

const IconsWrapper = styled("div")({
  display: "flex",
  gap: "24px",

  img: {
    width: "40px",
    height: "40px",
  },
});

const TopStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const TopWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "460px 1fr",
  gap: "24px",
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: "16px",
    gridTemplateColumns: "1fr",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "460px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },

  [theme.breakpoints.mobile]: {
    gap: "16px",
    height: "300px",
    gridTemplateColumns: "1fr",
  },
}));

const StatusWrapper = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.grey,
  fontWeight: 700,
  marginTop: "24px",

  [theme.breakpoints.mobile]: {
    marginTop: "0",
    fontSize: theme.fontSize.fontS18,
  },
}));

const NameRating = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "max-content",
  justifyContent: "space-between",

  h2: {
    color: theme.colors.blue,
    fontWeight: 700,
    fontSize: theme.fontSize.fontS40,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS24,
    },
  },

  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));

const Preferences = styled("h3")(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    fontWeight: 400,
    color: theme.colors.black,
    marginBottom: "6px",
  },
}));

const List = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginLeft: "24px",

  [theme.breakpoints.mobile]: {
    gap: "0",
  },

  li: {
    lineHeight: 1.5,
  },
}));

const OnlyMobile = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.mobile]: {
    display: "block",
  },
}));

const OnlyDesktop = styled("div")(({ theme }) => ({
  display: "block",

  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));
