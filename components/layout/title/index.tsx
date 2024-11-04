import styled from "@emotion/styled";

export const Title = styled(({ as: Component = "h1", ...props }) => (
  <Component {...props} />
))(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));
