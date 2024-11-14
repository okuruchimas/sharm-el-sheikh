import styled from "@emotion/styled";
import { StatusDot } from "../card";
import {
  StatusColors,
  type StatusOptions,
} from "../../../../../constants/taxi-statuses.constants";

interface TaxiStatusProps {
  text: string;
  status: StatusOptions;
}
const TaxiStatus = ({ text, status }: TaxiStatusProps) => {
  return (
    <Wrap>
      <StatusStyled color={StatusColors[status]} />
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

const StatusStyled = styled(StatusDot)(({ theme }) => ({
  position: "unset",
  [theme.breakpoints.mobile]: {},
}));

export default TaxiStatus;
