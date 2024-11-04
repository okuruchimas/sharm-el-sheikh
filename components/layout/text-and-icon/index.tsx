import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

interface Props {
  src: string;
  text: string;
  iconSize?: string;
  fontSize?: string;
}
const TextAndIcon = ({
  src,
  text,
  iconSize = "24px",
  fontSize = "16px",
}: Props) => {
  return (
    <Wrap iconSize={iconSize}>
      <Icon height={iconSize} width={iconSize} src={src} />
      <Text fontSize={fontSize}>{text}</Text>
    </Wrap>
  );
};

const Wrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "iconSize",
})<{ iconSize: string }>(({ theme, iconSize }) => ({
  display: "grid",
  gridTemplateColumns: `${iconSize} 1fr`,
  alignItems: "center",
  gap: 8,
  width: "100%",
}));

const Icon = styled(Image)(({ theme }) => ({}));

const Text = styled("div", {
  shouldForwardProp: (prop) => prop !== "fontSize",
})<{ fontSize?: string }>(({ theme, fontSize }) => ({
  color: theme.colors.blue,
  fontSize: fontSize,
  overflow: "hidden",
  textWrap: "nowrap",
  textOverflow: "ellipsis",
}));

export default TextAndIcon;
