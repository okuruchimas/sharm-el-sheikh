import styled from "@emotion/styled";

export const Hr = styled.div<{ isFooter?: boolean }>`
  height: 1px;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.blue3};
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: ${({ isFooter }) => (isFooter ? "block" : "none")};
  }
`;
