import { getUrl } from "./fetchApi";

export interface CommentInput {
  text: string;
  rating: number;
  email: string;
}

export async function addComment(
  slug: string,
  comment: CommentInput,
): Promise<CommentInput | void> {
  try {
    const response = await fetch(
      getUrl(`company-promotion-cards/${slug}/comments`),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      },
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to add comment:", error);
  }
}
