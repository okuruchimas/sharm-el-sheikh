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
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

const Icon = styled(Image)(({ theme }) => ({}));

const Text = styled("span")(({ theme }) => ({}));

export default TextAndIcon;
