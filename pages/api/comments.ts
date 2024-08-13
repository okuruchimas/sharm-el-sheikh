export type Comment = {
  _id: string;
  placeId: string;
  date: string;
  text: string;
  rating: number;
  email?: string;
};

export async function addComment(
  placeId: string,
  rating: number,
  text: string,
  email: string,
): Promise<Comment> {
  const response = await fetch("http://localhost:5000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating, text, placeId, email }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
}

export async function getComments(placeId: string): Promise<Comment[]> {
  const response = await fetch(`http://localhost:5000/comments/${placeId}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
}
