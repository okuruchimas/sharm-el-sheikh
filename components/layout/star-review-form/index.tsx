import { useTranslation } from "next-i18next";
import Button from "../button";
import { Title } from "../title";
import StarReview from "../../sections/company/review/children/star-review";
import styled from "@emotion/styled";

type StarReviewFormProps = {
  stars: number;
  isDisabled: boolean;
  isLoading: boolean;
  onSave: () => Promise<void>;
  onClose: () => void;
  onChange: (id: number) => void;
};
const StarReviewForm = ({
  stars,
  isLoading,
  isDisabled,
  onSave,
  onClose,
  onChange,
}: StarReviewFormProps) => {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <Section>
        <SectionTitle>{t("text.howRateEstablishment")}</SectionTitle>
        <StarReview stars={stars} onChange={onChange} disabled={isDisabled} />
        <SaveButton
          text={t("buttons.save")}
          onClick={onSave}
          isLoading={isLoading}
          disabled={isDisabled || stars < 1}
        />
      </Section>
      <BackButton text={t("buttons.back")} onClick={onClose} />
    </>
  );
};

export default StarReviewForm;

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  [theme.breakpoints.mobile]: {
    gap: 8,
  },
}));

const SectionTitle = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {},
}));

const BackButton = styled(Button)(({ theme }) => ({
  alignSelf: "end",
  zIndex: 2,

  [theme.breakpoints.mobile]: {
    position: "sticky",
    bottom: 0,
    right: 0,
    opacity: 0.9,
    minWidth: "130px",
  },
}));

const SaveButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,

  [theme.breakpoints.mobile]: {
    minWidth: "130px",
  },
}));
