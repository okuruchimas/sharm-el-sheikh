export interface PromCardI {
  // images: ImagesI[];
  photo: string;
  title: string;
  location: string;
}

// interface ImagesI {
//   photoCard: string;
// }

export interface PromCardProps {
  promCards: PromCardI[];
}
