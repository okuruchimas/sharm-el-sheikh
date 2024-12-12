export interface EventCardI {
  logoAlt?: string;
  logo: string;
  date: string;
  title: string;
  price: string;
  location: string;
  onClick: () => void;
}
