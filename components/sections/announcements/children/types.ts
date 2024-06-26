import { SocialIcon } from "../../../layout/social-icons";

export interface AnnouncementCardI {
  image: string;
  title: string;
  text: string;
  icons: SocialIcon[];
  isFirst: boolean;
}

export interface AnnouncementCardProps {
  announcementsCards: AnnouncementCardI[];
}
