import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const arr = [
  "/icons/flags/UA.svg",
  "/icons/flags/DT.svg",
  "/icons/flags/IT.svg",
  "/icons/flags/EN.svg",
];
const Flags = () => {
  return (
    <Wrap>
      {arr.map((el) => (
        <Image key={el} height={24} width={30} src={el} alt="Flag" />
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "16px",
  width: "100%",
}));

export default Flags;
