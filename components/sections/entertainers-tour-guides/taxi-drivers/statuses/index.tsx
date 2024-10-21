import styled from "@emotion/styled";
import { Status, Statuses } from "../card";

export interface TaxiStatusProps {
  text: string;
  status: "available" | "unavailable" | "notwork";
}
const TaxiStatus = ({ text, status }: TaxiStatusProps) => {
  return (
    <Wrap>
      <StatusStyled color={Statuses[status]} />
      <Text>{text}</Text>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  minWidth: "max-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",

  [theme.breakpoints.mobile]: {},
}));

const Text = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  [theme.breakpoints.mobile]: {},
}));

const StatusStyled = styled(Status)(({ theme }) => ({
  position: "unset",
  [theme.breakpoints.mobile]: {},
}));

export default TaxiStatus;
