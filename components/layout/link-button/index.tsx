import styled from "@emotion/styled";
import Link from "next/link";

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

export default LinkButton;

const Text = styled.span`
  padding: 10px 12px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  font-family: Comfortaa, serif;
  text-decoration: underline;
  cursor: pointer;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS14};
  }
`;
