import styled from "@emotion/styled";

const Background = () => {
  return (
    <Wrap>
      <Image src="images/background-prom.svg" alt="image"></Image>
      <Title>Currently no discounts available</Title>
    </Wrap>
  );
};

export default Background;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img``;

const Title = styled.h3`
  font-family: Comfortaa, serif;
  font-weight: 700;
  text-align: center;
  margin: 24px 288px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS24};
  color: ${({ theme: { colors } }) => colors.blue};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS14};
    margin: 12px 0 0;
  }
`;
