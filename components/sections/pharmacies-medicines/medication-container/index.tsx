// hooks
import { useTranslation } from "next-i18next";
import { useState, useEffect, useCallback } from "react";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// components
import Image from "next/image";
import Loader from "../../../layout/loader";
import Button from "../../../layout/button";
// types
import {
  GetMedicationBySlugDocument,
  type Medication,
  type MedicationPreviewFragment,
} from "../../../../gql/graphql";
import TextAndIcon from "../../../layout/text-and-icon";

type MedicationContainerProps = {
  medicationPreview: MedicationPreviewFragment;
  isLoading?: boolean;
  onClose: () => void;
};

const MedicationContainer = ({
  medicationPreview,
  onClose,
}: MedicationContainerProps) => {
  const [fullData, setFullData] = useState<Medication | undefined | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { t: tCommon, i18n } = useTranslation("common");
  const { t } = useTranslation("medications");

  const getFullClubData = useCallback(async () => {
    setIsLoading(true);
    const { medications } = await fetchDataFromApi(
      GetMedicationBySlugDocument,
      {
        slug: medicationPreview.slug,
        locale: i18n.language,
      },
    );

    setFullData(medications?.data[0]?.attributes as Medication);
    setIsLoading(false);
  }, [medicationPreview.slug, i18n.language]);

  useEffect(() => {
    getFullClubData();
  }, [medicationPreview.slug, getFullClubData]);

  const renderSection = (title: string, items: Medication["indications"]) =>
    items?.length ? (
      <>
        <Stack gap="4px" mGap="4px" fallDown>
          <Title>{`${t(title)}:`}</Title>
          <Stack gap="4px" mGap="0">
            {items.map((el) => (
              <RowStack key={el?.value} gap="12px">
                <Text>•</Text>
                <Text>{el?.value || ""}</Text>
              </RowStack>
            ))}
          </Stack>
        </Stack>
      </>
    ) : null;

  return (
    <Wrapper>
      <Stack gap="8px">
        <TopSection>
          <ImgWrapper>
            <Image
              src={medicationPreview?.image?.data?.attributes?.url || ""}
              alt={
                medicationPreview?.image?.data?.attributes?.alternativeText ||
                ""
              }
              layout="fill"
            />
          </ImgWrapper>
          <Stack>
            <RowStack style={{ flexWrap: "wrap" }}>
              {medicationPreview.medication_categories?.data.map((el) => (
                <Category key={el.attributes?.value}>
                  {el.attributes?.value}
                </Category>
              ))}
            </RowStack>
            <Name>{medicationPreview.name}</Name>
            {fullData?.slug ? (
              <RowStack
                style={{ justifyContent: "space-between", flexWrap: "wrap" }}
              >
                <TextAndIcon
                  src="/icons/promotions-section/location.svg"
                  text={fullData.location}
                  fontSize="21px"
                  iconSize="36px"
                />
                <TextAndIcon
                  src="/icons/cash.svg"
                  text={fullData.price}
                  fontSize="21px"
                  iconSize="36px"
                />
              </RowStack>
            ) : null}
          </Stack>
        </TopSection>
        {renderSection("indications", fullData?.indications)}
        {renderSection("dosage", fullData?.dosage)}
        {renderSection("contraindications", fullData?.contraindications)}
        {renderSection("sideEffects", fullData?.sideEffects)}
        {renderSection("storage", fullData?.storage)}
        {renderSection("warnings", fullData?.storage)}
      </Stack>
      {isLoading ? <Loader /> : null}
      <BackButton
        text={tCommon("buttons.back")}
        onClick={onClose}
        color="blue"
        backgroundColor="white"
      />
    </Wrapper>
  );
};

export default MedicationContainer;

const fallDownKF = keyframes`
    0% { transform: translateY(-30%); opacity: 0 }
    50% { transform: translateY(-20%); opacity: 0.2 }
    100% { transform: translateY(0); opacity: 1}
`;

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "24px",
  minHeight: "890px",
  position: "relative",

  [theme.breakpoints.mobile]: {
    gap: "16px",
  },
}));

const Category = styled("div")(({ theme }) => ({
  padding: "6px 12px",
  color: theme.colors.blue,
  backgroundColor: theme.colors.white2,
  borderRadius: "8px",
}));

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",

  [theme.breakpoints.mobile]: {
    position: "sticky",
    bottom: 0,
    right: 0,
    opacity: 0.9,
    minWidth: "130px",
  },
}));

const TopSection = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "340px 1fr",
  gap: "24px",
  marginBottom: "16px",

  [theme.breakpoints.mobile]: {
    gap: "16px",
    gridTemplateColumns: "1fr",
  },
}));

const Stack = styled("div", {
  shouldForwardProp: (prop) => !["gap", "fallDown", "mGap"].includes(prop),
})<{ gap?: string; fallDown?: boolean; mGap?: string }>(
  ({ theme, gap, fallDown, mGap }) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap || "16px",

    ...(fallDown ? { animation: `${fallDownKF} 0.3s linear` } : {}),

    [theme.breakpoints.mobile]: {
      gap: mGap || "8px",
    },
  }),
);

const RowStack = styled("div", {
  shouldForwardProp: (prop) => !["gap", "marginBottom"].includes(prop),
})<{ gap?: string; marginBottom?: string }>(({ gap, marginBottom, theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: gap || "8px",
  marginBottom: marginBottom || "0",

  ".text-and-icon": {
    width: "unset",
    div: {
      color: theme.colors.black,
    },
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "340px",
  borderRadius: "16px",
  overflow: "hidden",
  img: {
    objectFit: "cover",
  },

  [theme.breakpoints.mobile]: {
    height: "300px",
  },
}));

const Title = styled("h2", {
  shouldForwardProp: (prop) => prop !== "marginBottom",
})<{ marginBottom?: string }>(({ theme, marginBottom }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: marginBottom || "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));

const Text = styled("p", {
  shouldForwardProp: (prop) => prop !== "fontWeight",
})<{ fontWeight?: string }>(({ theme, fontWeight }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: fontWeight || 400,
  lineHeight: 1.5,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  width: "100%",
  marginTop: "10px",
  marginBottom: "45px",

  [theme.breakpoints.mobile]: {
    marginTop: "0",
    marginBottom: "8px",
    fontSize: theme.fontSize.fontS28,
  },
}));
