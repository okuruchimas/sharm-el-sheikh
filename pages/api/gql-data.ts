import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "../../utils/fetchApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { queryDocument, variables } = req.body;

    if (!queryDocument) {
      return res.status(400).json({ error: "GraphQL query is required." });
    }

    const data = await fetchData(queryDocument, variables || {});

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
