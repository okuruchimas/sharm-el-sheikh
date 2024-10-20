import Image from "next/image";
import styled from "@emotion/styled";

type FlagsProps = { icons: string[] };
const Flags = ({ icons }: FlagsProps) => {
  return (
    <Wrap>
      {icons.map((el) => (
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
