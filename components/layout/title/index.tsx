import styled from "@emotion/styled";

export const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS40};
  color: ${({ theme: { colors } }) => colors.blue};
  font-family: Comfortaa, serif;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  }
`;
