import type { selectOption } from "../components/types/filter";

export interface CategoryLike {
  attributes?: {
    key?: string | null;
    value?: string | null;
    icon?: {
      data?: { attributes?: { url?: string | null } | null } | null;
    } | null;
    markerIcon?: {
      data?: { attributes?: { url?: string | null } | null } | null;
    } | null;
  } | null;
}

export const mapCategory = <T extends CategoryLike>(
  category: T,
): selectOption => ({
  key: category.attributes?.key ?? "",
  value: category.attributes?.value ?? "",
  iconSrc: category.attributes?.icon?.data?.attributes?.url ?? "",
  markerIcon:
    category.attributes?.markerIcon?.data?.attributes?.url ?? undefined,
});
