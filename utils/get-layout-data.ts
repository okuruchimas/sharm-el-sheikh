import { fetchData } from "./fetchApi";
import {
  GetFooterDocument,
  GetHeaderDocument,
  type FooterFragment,
  type HeaderFragment,
} from "../gql/graphql";

export interface LayoutData {
  headerData?: HeaderFragment | null;
  footerData?: FooterFragment | null;
}

export const getLayoutData = async (locale: string): Promise<LayoutData> => {
  const [{ header }, { footer }] = await Promise.all([
    fetchData(GetHeaderDocument, { locale }),
    fetchData(GetFooterDocument, { locale }),
  ]);

  return {
    headerData: header?.data?.attributes,
    footerData: footer?.data?.attributes,
  };
};
