import { SocialIcon } from "../../../layout/social-icons";

export interface AnnouncementCardI {
  image: string;
  title: string;
  text: string;
  icons: SocialIcon[];
}

export interface AnnouncementCardProps {
  announcementsCards: AnnouncementCardI[];
}
