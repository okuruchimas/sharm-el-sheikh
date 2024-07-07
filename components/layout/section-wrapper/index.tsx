import styled from "@emotion/styled";

const SectionsWrapper = styled.div<{ url: string; mobUrl: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 80px 100px;
  gap: 80px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 32px 16px;
    gap: 32px;
    background-image: ${({ mobUrl }) => `url(${mobUrl})`};
  }
`;
export default SectionsWrapper;
