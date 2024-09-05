import { TypedDocumentString } from "../gql/graphql";
import type { GraphQLError } from "graphql/error";

export function getUrl(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}/${path}`;
}
export async function fetchAPI(path: string) {
  const url = getUrl(path);
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
type GraphQLResponse<GraphOLData> =
  | { data: GraphOLData }
  | { errors: GraphQLError };

export const fetchData = async <Result, Variables>(
  document: TypedDocumentString<Result, Variables>,
  variables?: Variables,
): Promise<Result> => {
  const response = await fetch(
    "https://beautiful-boot-1db2e6c4ea.strapiapp.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: document.toString(),
        variables: variables || {},
      }),
    },
  );

  const result = (await response.json()) as GraphQLResponse<Result>;

  if ("errors" in result) {
    throw new Error(result.errors.message);
  }

  return result.data;
};
