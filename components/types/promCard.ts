export interface PromCardI {
  id?: number;
  images: ImagesI[];
  discount: string;
  title: string;
  location: string;
  category?: string;
  position?: {
    lat: number;
    lng: number;
  };
}

interface ImagesI {
  src: string;
}

export interface PromCardProps {
  promCards: PromCardI[];
}
