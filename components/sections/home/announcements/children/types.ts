import { SocialIconI } from "../../../../layout/social-icon";

export interface AnnouncementCardI {
  image: string;
  title: string;
  text: string;
  icons: SocialIconI[];
  isFirst: boolean;
}

export interface AnnouncementCardProps {
  announcementsCards: AnnouncementCardI[];
}
