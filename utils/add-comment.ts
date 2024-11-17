import { getUrl } from "./fetchApi";

export type CommentInput = {
  text: string;
  rating: number;
  email: string;
};
type CollectionTypesWithComments =
  | "company-promotion-cards"
  | "animators"
  | "taxi-driver"
  | "photographers"
  | "tour-guides";
type AddCommentParams = {
  slug: string;
  comment: CommentInput;
  collectionType: CollectionTypesWithComments;
};

export async function addComment({
  slug,
  comment,
  collectionType,
}: AddCommentParams): Promise<CommentInput | void> {
  try {
    const response = await fetch(getUrl(`${collectionType}/${slug}/comments`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to add comment:", error);
    throw error;
  }
}
