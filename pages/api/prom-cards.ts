import { Categories } from "../../components/sections/home/map/children/constants";
import { NextApiRequest, NextApiResponse } from "next";
import type { CompanyCardFragment } from "../../gql/graphql";

export interface PromCardI {
  id?: number;
  slug?: string;
  images: ImagesI[];
  discount: string;
  title: string;
  location: string;
  category?: string;
  description?: string;
  position?: {
    lat: number;
    lng: number;
  };
}

export interface ImagesI {
  src: string;
}

export interface PromCardProps {
  promCards: CompanyCardFragment[];
}

export const dataPromCardsDeprecated = [
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

export const dataPromCards = [
  {
    id: 1,
    slug: "sharm-dreams-resort",
    title: "Sharm Dreams Resort",
    discount: "20% discount",
    description: "A beautiful resort in South Sinai Governorate.",
    youTubeVideoId: "abcd1234", // example YouTube ID
    touchText: "Contact Us",
    touchLink: "https://example.com/contact",
    averageRating: 4.5,
    totalComments: 100,
    location: "South Sinai Governorate",
    images: {
      data: [
        {
          id: "1",
          attributes: {
            url: "/images/prom-cards/prom-card1.webp",
            alternativeText: "Promotional Card 1",
          },
        },
        {
          id: "2",
          attributes: {
            url: "/images/prom-cards/prom-card2.webp",
            alternativeText: "Promotional Card 2",
          },
        },
        {
          id: "3",
          attributes: {
            url: "/images/prom-cards/prom-card3.webp",
            alternativeText: "Promotional Card 3",
          },
        },
      ],
    },
    position: {
      lat: "25.28",
      lng: "55.328",
    },
    discountBanner: {
      title: "Special Offer",
      buttonText: "Get Now",
      buttonLink: "https://example.com/offer",
      bannerImage: {
        data: {
          attributes: {
            url: "/images/banner/banner1.webp",
            alternativeText: "Banner Image",
          },
        },
      },
    },
    filters: {
      data: [
        {
          id: "1",
          attributes: {
            text: "Family",
            key: "family",
          },
        },
        {
          id: "2",
          attributes: {
            text: "Luxury",
            key: "luxury",
          },
        },
      ],
    },
    services: {
      data: [
        {
          id: "1",
          attributes: {
            text: "Free Wi-Fi",
            icon: {
              data: {
                attributes: {
                  url: "icons/wifi.svg",
                  alternativeText: "Wi-Fi Icon",
                },
              },
            },
          },
        },
        {
          id: "2",
          attributes: {
            text: "24/7 Support",
            icon: {
              data: {
                attributes: {
                  url: "icons/support.svg",
                  alternativeText: "Support Icon",
                },
              },
            },
          },
        },
      ],
    },
  },
  {
    id: 2,
    slug: "sharm-dreams-resort",
    title: "El Ezaby Pharmacy",
    discount: "30% discount",
    description: "Pharmacy offering a wide range of healthcare products.",
    youTubeVideoId: "efgh5678", // example YouTube ID
    touchText: "Reach Us",
    touchLink: "https://example.com/reach",
    averageRating: 4.7,
    totalComments: 200,
    location: "صيدلية العزبي",
    images: {
      data: [
        {
          id: "4",
          attributes: {
            url: "/images/prom-cards/prom-card2.webp",
            alternativeText: "Promotional Card 2",
          },
        },
        {
          id: "5",
          attributes: {
            url: "/images/prom-cards/prom-card1.webp",
            alternativeText: "Promotional Card 1",
          },
        },
        {
          id: "6",
          attributes: {
            url: "/images/prom-cards/prom-card3.webp",
            alternativeText: "Promotional Card 3",
          },
        },
      ],
    },
    position: {
      lat: "25.26",
      lng: "55.4129",
    },
    discountBanner: {
      title: "Exclusive Deal",
      buttonText: "Shop Now",
      buttonLink: "https://example.com/shop",
      bannerImage: {
        data: {
          attributes: {
            url: "/images/banner/banner2.webp",
            alternativeText: "Exclusive Deal Banner",
          },
        },
      },
    },
    filters: {
      data: [
        {
          id: "3",
          attributes: {
            text: "Health",
            key: "health",
          },
        },
      ],
    },
    services: {
      data: [
        {
          id: "3",
          attributes: {
            text: "Prescription Services",
            icon: {
              data: {
                attributes: {
                  url: "icons/prescription.svg",
                  alternativeText: "Prescription Icon",
                },
              },
            },
          },
        },
      ],
    },
  },
  {
    id: 3,
    slug: "mannys-burger",
    title: "Manny’s Burger",
    discount: "33% discount",
    description: "Pharmacy offering a wide range of healthcare products.",
    youTubeVideoId: "efgh5678", // example YouTube ID
    touchText: "Reach Us",
    touchLink: "https://example.com/reach",
    averageRating: 4.7,
    totalComments: 200,
    location: "صيدلية العزبي",
    images: {
      data: [
        {
          id: "6",
          attributes: {
            url: "/images/prom-cards/prom-card3.webp",
            alternativeText: "Promotional Card 3",
          },
        },
        {
          id: "4",
          attributes: {
            url: "/images/prom-cards/prom-card2.webp",
            alternativeText: "Promotional Card 2",
          },
        },
        {
          id: "5",
          attributes: {
            url: "/images/prom-cards/prom-card1.webp",
            alternativeText: "Promotional Card 1",
          },
        },
      ],
    },
    position: {
      lat: "25.26",
      lng: "55.4129",
    },
    discountBanner: {
      title: "Exclusive Deal",
      buttonText: "Shop Now",
      buttonLink: "https://example.com/shop",
      bannerImage: {
        data: {
          attributes: {
            url: "/images/banner/banner2.webp",
            alternativeText: "Exclusive Deal Banner",
          },
        },
      },
    },
    filters: {
      data: [
        {
          id: "3",
          attributes: {
            text: "Health",
            key: "health",
          },
        },
      ],
    },
    services: {
      data: [
        {
          id: "3",
          attributes: {
            text: "Prescription Services",
            icon: {
              data: {
                attributes: {
                  url: "icons/prescription.svg",
                  alternativeText: "Prescription Icon",
                },
              },
            },
          },
        },
      ],
    },
  },
];

export default (
  req: NextApiRequest,
  res: NextApiResponse<CompanyCardFragment[]>,
) => {
  res.status(200).json(dataPromCards);
};
