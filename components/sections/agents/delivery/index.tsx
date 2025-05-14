import { ChangeEvent, useState } from "react";
import SectionWrapper from "../../../layout/section-wrapper";
import TypeSwitcher from "../../home/feedback/children/type-switcher";
import styled from "@emotion/styled";
import Button from "../../../layout/button";
import Member from "../../../../public/icons/agents/member.svg";
import Car from "../../../../public/icons/agents/car.svg";
import Box from "../../../../public/icons/agents/box.svg";
import AddAdvertisementForm from "./children/ad-form";
import Advertisements from "./children/advertisements";

const ads: any[] = [
  {
    name: "Anna Stuart",
    mobile: "+1234567890",
    contactMethod: "email",
    email: "user@gmail.com",
    publicationType: "sell",
    title: "Linen Dress",
    location: "Meet place",
    price: "40",
    description:
      "This linen dress embodies effortless elegance with its soft, breathable fabric. Falls below the knee with subtle pleats. Earthy tones, minimalist cut – ideal for layering.",
    personalCardLink: "",
    agree: true,
  },
  {
    name: "Marta Green",
    mobile: "+9876543210",
    contactMethod: "phone",
    email: "marta.green@example.com",
    publicationType: "sell",
    title: "Handmade Leather Bag",
    location: "Kyiv, Ukraine",
    price: "85",
    description:
      "Stylish handmade leather bag with adjustable strap and inner pockets. Durable, timeless design. Perfect for everyday use or as a thoughtful gift.",
    personalCardLink: "",
    agree: true,
  },
  {
    name: "Oleh Ivanov",
    mobile: "+380501234567",
    contactMethod: "email",
    email: "oleh.iv@example.com",
    publicationType: "sell",
    title: "Vintage Bicycle",
    location: "Lviv",
    price: "120",
    description:
      "Classic vintage bicycle in excellent condition. Ideal for city rides and collectors. New tires, original frame, and a charming retro bell.",
    personalCardLink: "",
    agree: true,
  },
  {
    name: "Daria Kovalenko",
    mobile: "+380631234567",
    contactMethod: "phone",
    email: "daria.kov@gmail.com",
    publicationType: "sell",
    title: "Ceramic Tea Set",
    location: "Odessa",
    price: "60",
    description:
      "Elegant handmade ceramic tea set for 4 people. Includes teapot and cups. Natural glazes and warm tones, perfect for cozy evenings or decor.",
    personalCardLink: "",
    agree: true,
  },
];

const types = [
  {
    icon: <Member />,
    type: "member",
    value: "Member Offers",
  },
  {
    icon: <Car />,
    type: "to",
    value: "Order Delivery to Egypt",
  },
  {
    icon: <Box />,
    type: "from",
    value: "Receive from Egypt",
  },
];
const Delivery = () => {
  const [type, setType] = useState<string>("to");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isAddFrom, setAddFrom] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log("Search input:", value);
  };

  const handleIsForm = () => {
    setAddFrom((prev) => !prev);
  };

  return (
    <SectionWrapper title={"Bring from Egypt or Send there? Easy!"} mt="60px">
      <TypeSwitcher currentType={type} setType={setType} typesProp={types} />

      <SearchWrapper>
        <Input
          type="search"
          placeholder="Type to search"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <AddButton onClick={handleIsForm} text={"Add Advertisement"} />
        {isAddFrom ? <AddAdvertisementForm cancelClick={handleIsForm} /> : null}
      </SearchWrapper>

      <Advertisements advertisements={ads} />
    </SectionWrapper>
  );
};

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: 16,
  },
}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  height: 56,
  padding: "12px 16px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
  "&:focus": {
    borderColor: theme.colors.yellow,
  },

  [theme.breakpoints.mobile]: {
    maxWidth: "100%",
    flexDirection: "column",
    gap: 16,
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    width: "100%",
  },
}));

export default Delivery;
