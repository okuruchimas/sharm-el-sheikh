import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
const arr = [
  { link: "animators", text: "Animators" },
  { link: "taxi-drivers", text: "Taxi Drivers" },
  { link: "photographers", text: "Photographers" },
  { link: "tour-and-guides", text: "Tour operators and Guides" },
];
const Tabs = () => {
  const { route } = useRouter();

  return (
    <Wrap>
      {arr.map(({ link, text }) => (
        <Link key={link} href={link}>
          <Text isActive={route?.includes(link)}>{text}</Text>
        </Link>
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  margin: "80px 0 40px",
  borderBottom: `1px solid ${theme.colors.grey}`,
  overflowX: "auto",
}));

const Text = styled("span", {
  shouldForwardProp: (prop) => !["isActive"].includes(prop),
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  minWidth: "310px",
  height: "48px",
  borderBottom: isActive ? `1px solid ${theme.colors.yellow}` : "none",

  fontSize: "21px",
  textAlign: "center",
  alignContent: "center",
  color: isActive ? theme.colors.black2 : theme.colors.grey,
}));

export default Tabs;
