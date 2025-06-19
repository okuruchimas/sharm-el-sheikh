import { useEffect, useState } from 'react';
import {
  addRating,
  type CollectionTypesWithRating,
} from '../../utils/add-rating';

type Params = {
  slug: string;
  storageName: string;
  collectionType: CollectionTypesWithRating;
};

const useRatePlace = ({ slug, storageName, collectionType }: Params) => {
  const [stars, setStars] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ratedSpots = JSON.parse(localStorage.getItem(storageName) || '[]');
    const ratedSpot = ratedSpots.find(
      (item: { slug: string }) => item.slug === slug,
    );

    if (ratedSpot) {
      setIsRated(true);
      setStars(ratedSpot.rating);
    }
  }, [slug, storageName]);

  const handleSave = async () => {
    setIsLoading(true);

    await addRating({
      rating: stars,
      slug: slug,
      collectionType,
    }).then(() => {
      const ratedSpots = JSON.parse(localStorage.getItem(storageName) || '[]');

      const updatedRatedSpots = [...ratedSpots, { slug: slug, rating: stars }];
      localStorage.setItem(storageName, JSON.stringify(updatedRatedSpots));
      setIsRated(true);
      setIsLoading(false);
    });
  };

  return {
    stars,
    isLoadingRating: isLoading,
    isDisabled: isRated || isLoading,
    handleSave,
    setStars,
  };
};
export default useRatePlace;
