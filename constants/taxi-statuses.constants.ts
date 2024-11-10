export type StatusOptions = "available" | "unavailable" | "notwork";

export enum StatusColors {
  available = "green",
  unavailable = "yellow4",
  notwork = "red2",
}

export const TAXI_STATUSES: readonly {
  i18nKey: string;
  status: StatusOptions;
}[] = [
  { i18nKey: "taxiStatus.available", status: "available" },
  { i18nKey: "taxiStatus.notAvailable", status: "unavailable" },
  { i18nKey: "taxiStatus.doesntWork", status: "notwork" },
] as const;
