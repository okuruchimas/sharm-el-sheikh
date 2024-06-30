import styled from "@emotion/styled";

export const SubTitle = styled.h4`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS24};
  color: ${({ theme: { colors } }) => colors.blue};
  margin: 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS16};
  }
`;
