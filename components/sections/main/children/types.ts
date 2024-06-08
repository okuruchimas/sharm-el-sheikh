export interface EventCardI {
  logo: string;
  date: string;
  title: string;
  price: string;
  location: string;
}

export interface EventCardProps {
  eventCards: EventCardI[];
}
