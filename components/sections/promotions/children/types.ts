export interface PromCardI {
  images: ImagesI[];
  discount: string;
  title: string;
  location: string;
}

interface ImagesI {
  src: string;
}

export interface PromCardProps {
  promCards: PromCardI[];
}
