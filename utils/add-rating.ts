import { getUrl } from './fetchApi';

export type CollectionTypesWithRating =
  | 'companies'
  | 'animation-companies'
  | 'tours'
  | 'taxi-spots'
  | 'photography-locations'
  | 'tour-operator-companies';

type AddRatingParams = {
  slug: string;
  rating: number;
  collectionType: CollectionTypesWithRating;
};

export async function addRating({
  slug,
  rating,
  collectionType,
}: AddRatingParams) {
  try {
    const response = await fetch(getUrl(`${collectionType}/${slug}/ratings`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: rating }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to add rating:', error);
    throw error;
  }
}
