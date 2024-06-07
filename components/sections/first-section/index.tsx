import styled from "@emotion/styled";

const FirstSection = () => {
  return <WrapSection />;
};

export { FirstSection };

const WrapSection = styled.div`
  width: 100vw;
  height: 100dvh;
  background-image: url("images/bg_img.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
