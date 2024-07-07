export function getUrl(path = "") {
  return `${process.env.API_URL}${path}`;
}
export async function fetchAPI(path: string) {
  const url = getUrl(path);
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
