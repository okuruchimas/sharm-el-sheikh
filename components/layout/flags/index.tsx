import Image from "next/image";
import styled from "@emotion/styled";
import type { ImageI } from "../../types/image";

type FlagsProps = { icons: ImageI[] };

const Flags = ({ icons }: FlagsProps) => {
  return (
    <Wrap className="flags-wrapper">
      {icons.map(({ src, alt }) => (
        <Image key={src} height={24} width={30} src={src} alt={alt} />
      ))}
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
}));

export default Flags;
