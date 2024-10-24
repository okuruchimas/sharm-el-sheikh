import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  src: string;
  text: string;
}
const TextAndIcon = ({ src, text }: Props) => {
  return (
    <Wrap>
      <Icon height={24} width={24} src={src} />
      <Text>{text}</Text>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "24px 1fr",
  alignItems: "center",
  gap: 8,
  width: "100%",
}));

const Icon = styled(Image)(({ theme }) => ({}));

const Text = styled("span")(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS16,
  overflow: "hidden",
  textWrap: "nowrap",
  textOverflow: "ellipsis",
}));

export default TextAndIcon;
