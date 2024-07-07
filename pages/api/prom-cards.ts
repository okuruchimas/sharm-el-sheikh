import { Categories } from "../../components/sections/map/children/constants";
import { NextApiRequest, NextApiResponse } from "next";

export interface PromCardI {
  id?: number;
  slug?: string;
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

const data = [
  {
    id: 1,
    slug: "sharm-dreams-resort",
    title: "Sharm Dreams resort",
    discount: "20% discount",
    location: "South Sinai Governorate",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.HOOKAHS,
    position: { lat: 25.28, lng: 55.328 },
  },
  {
    id: 2,
    slug: "el-ezaby-pharmacy",
    title: "El Ezaby Pharmacy",
    discount: "30% discount",
    location: "صيدلية العزبي",
    images: [
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.HOOKAHS,
    position: { lat: 25.26, lng: 55.4129 },
  },
  {
    id: 3,
    slug: "mannys-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card3.webp" },
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
    ],
    category: Categories.HOOKAHS,
    position: { lat: 25.242, lng: 55.35295 },
    discount: "40% discount",
  },
  {
    id: 4,
    slug: "mannys-burger2",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.MEDICATIONS,
    position: { lat: 25.2826, lng: 55.3923 },
    discount: "20% discount",
  },
  {
    id: 5,
    slug: "mannys-burge3",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.MEDICATIONS,
    position: { lat: 25.2916, lng: 55.313 },
    discount: "20% discount",
  },
  {
    id: 6,
    slug: "mannys-burge5r",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.MEDICATIONS,
    position: { lat: 25.25236, lng: 55.329293 },
    discount: "20% discount",
  },
  {
    id: 7,
    slug: "mann3ys-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.FRUITS,
    position: { lat: 25.269, lng: 55.389 },
    discount: "20% discount",
  },
  {
    id: 8,
    slug: "man2nys-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.FRUITS,
    position: { lat: 25.25, lng: 55.32 },
    discount: "20% discount",
  },
  {
    id: 9,
    slug: "mannys-bu42rger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.FRUITS,
    position: { lat: 25.2427, lng: 55.29 },
    discount: "20% discount",
  },
  {
    id: 10,
    slug: "man23nys-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.COSMETOLOGY,
    position: { lat: 25.2826, lng: 55.3923 },
    discount: "20% discount",
  },
  {
    id: 11,
    slug: "mannys-bur234ger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.COSMETOLOGY,
    position: { lat: 25.25213, lng: 55.326 },
    discount: "20% discount",
  },
  {
    id: 12,
    slug: "manny2342s-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.COSMETOLOGY,
    position: { lat: 25.263183, lng: 55.363 },
    discount: "20% discount",
  },
  {
    id: 13,
    slug: "mannys-burg23424er",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.SOUVENIRS,
    position: { lat: 25.273, lng: 55.36455 },
    discount: "20% discount",
  },
  {
    id: 14,
    slug: "mannys-burg23e2342r",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.SOUVENIRS,
    position: { lat: 25.243176, lng: 55.3154956 },
    discount: "20% discount",
  },
  {
    id: 15,
    slug: "m43543t324234nnys-burger",
    title: "Manny’s Burger",
    location: "61 El-Salam, Street",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.SOUVENIRS,
    position: { lat: 25.28, lng: 55.35 },
    discount: "20% discount",
  },
  {
    id: 16,
    slug: "man49r2034-383nys-burger",
    title: "Sharm Dreams resort",
    location: "South Sinai Governorate",
    images: [
      { src: "images/prom-cards/prom-card1.webp" },
      { src: "images/prom-cards/prom-card2.webp" },
      { src: "images/prom-cards/prom-card3.webp" },
    ],
    category: Categories.HOOKAHS,
    position: { lat: 25.183, lng: 55.32428 },
    discount: "20% discount",
  },
];

export default (req: NextApiRequest, res: NextApiResponse<PromCardI[]>) => {
  res.status(200).json(data);
};
