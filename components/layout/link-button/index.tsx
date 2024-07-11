//libs
import Link from "next/link";
//utils
import styled from "@emotion/styled";

interface Props {
  text: string;
  link: string;
}

const LinkButton = ({ text, link }: Props) => {
  return (
    <Link href={link}>
      <Text>{text}</Text>
    </Link>
  );
};

const Text = styled("span")(({ theme }) => ({
  padding: "10px 12px",
  textAlign: "center",
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS16,
  textDecorationLine: "underline",
  cursor: "pointer",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default LinkButton;
