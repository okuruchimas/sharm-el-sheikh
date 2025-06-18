import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Title } from "../../../layout/title";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import useResponsive from "../../../../hooks/useResponsive";

interface PropsContactRow {
  email: string;
  mobile: string;
}
interface Props extends PropsContactRow {
  sellerName: string;
  personalCardLink?: string | null;
}

export const SellerInfo = ({
  sellerName,
  email,
  mobile,
  personalCardLink,
}: Props) => {
  const { isMobile } = useResponsive();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email.");
    }
  };

  return (
    <Wrapper>
      <InfoWrap>
        <AvatarWrap size={isMobile ? 60 : 100}>
          <Image
            width={isMobile ? 36 : 50}
            height={isMobile ? 36 : 50}
            src="/icons/agents/human.svg"
            alt="human icon"
          />
        </AvatarWrap>
        <TextWrap>
          {personalCardLink ? (
            <Link href={personalCardLink}>
              <TitleStyled isLink as="h3">
                {sellerName}
              </TitleStyled>
            </Link>
          ) : (
            <TitleStyled as="h3">{sellerName}</TitleStyled>
          )}
          <Email onClick={handleCopy}>{email}</Email>
        </TextWrap>
      </InfoWrap>

      <ContactRow mobile={mobile} email={email} />
      <ToastContainer />
    </Wrapper>
  );
};

export const ContactRow = ({ mobile, email }: PropsContactRow) => {
  return (
    <ContactRowWrap>
      <IconCircle href={`tel:${mobile}`} aria-label={`Call ${mobile}`}>
        <Image
          width={24}
          height={24}
          src="/icons/agents/phone.svg"
          alt="phone icon"
        />
      </IconCircle>
      <IconCircle href={`mailto:${email}`} aria-label={`Email to ${email}`}>
        <Image
          width={24}
          height={24}
          src="/icons/agents/mail.svg"
          alt="mail icon"
        />
      </IconCircle>
    </ContactRowWrap>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 0,
  },
}));

const ContactRowWrap = styled("div")(({ theme }) => ({
  zIndex: 2,
  marginTop: "auto",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  [theme.breakpoints.mobile]: {
    justifyContent: "flex-end",
    marginTop: 8,
  },
}));

const IconCircle = styled("a")(({ theme }) => ({
  height: 40,
  width: 40,
  borderRadius: "50%",
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.yellow,
}));

export const AvatarWrap = styled("div")<{ size?: number }>(
  ({ theme, size = 50 }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 185, 1, 0.08)",
    border: "1px solid",
    borderColor: theme.colors.yellow,
  }),
);

const InfoWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  gap: 16,

  [theme.breakpoints.mobile]: {},
}));

const TextWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  [theme.breakpoints.mobile]: {},
}));

const TitleStyled = styled(Title)<{ isLink?: boolean }>(
  ({ theme, isLink }) => ({
    fontSize: theme.fontSize.fontS32,
    textDecoration: isLink ? "underline" : "none",
    [theme.breakpoints.mobile]: {},
  }),
);
const Email = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16 || 16,
  color: theme.colors.grey3,
}));
