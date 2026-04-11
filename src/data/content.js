import deluxeImg from "../assets/stays/DeluxeRoomImages/deluxe-room.jpeg";
import familyImg from "../assets/stays/FamilyRoomImages/family-room.jpg";
import suiteImg from "../assets/stays/SuiteRoomImages/suite-room.jpg";
import presidentialImg from "../assets/stays/PresidentialSuiteRoomImages/presidential-suite.jpg";
import slide1 from "../assets/slides/21.jpg";
import slide2 from "../assets/slides/12.jpeg";
import slide3 from "../assets/slides/14.jpeg";
import slide4 from "../assets/slides/15.jpeg";
import slide5 from "../assets/slides/17.jpeg";
import slide6 from "../assets/slides/18.jpeg";
import slide7 from "../assets/slides/19.jpeg";
import slide8 from "../assets/slides/2.jpeg";
import slide9 from "../assets/slides/3.jpeg";
import slide10 from "../assets/slides/4.jpeg";
import slide11 from "../assets/slides/1.jpeg";
import slide12 from "../assets/slides/7.jpeg";
import slide13 from "../assets/slides/8.jpeg";
import slide14 from "../assets/slides/10.jpeg";


export const SLIDES = [
  slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14
];

export const STAYS = [
  {
      title: "Deluxe Rooms",
      image: deluxeImg,
      route: "/stays/deluxe-rooms",
      description:
        "Thoughtfully designed for comfort and calm, our Deluxe Rooms offer a refined stay experience with elegant interiors, warm textures, and a soothing ambience that feels both luxurious and inviting.",
    },
    {
      title: "Family Rooms",
      image: familyImg,
      route: "/stays/family-rooms",
      description:
        "Created for togetherness, our Family Rooms provide generous space, comfort, and convenience for memorable stays with loved ones, blending warmth, practicality, and effortless elegance.",
    },
    {
      title: "Suite Rooms",
      image: suiteImg,
      route: "/stays/suite-rooms",
      description:
        "Our Suite Rooms bring together style, space, and sophistication, offering an elevated hospitality experience with beautifully curated interiors for guests who appreciate refined comfort.",
    },
    {
      title: "Presidential Suite",
      image: presidentialImg,
      route: "/stays/presidential-suite",
      description:
        "The Presidential Suite is the finest expression of URRTH hospitality — an exclusive, grand, and beautifully crafted space for those seeking a stay marked by prestige, indulgence, and timeless elegance.",
    },
];

export const DINE_DATA = {
  restaurant: {
    tag: "Restaurant",
    title: "The Garden Table",
    desc: "Creamy warm lights, earthy plating, and slow conversations.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1900&q=80",
  },
  cafe: {
    tag: "Café",
    title: "Cream & Coffee Corner",
    desc: "Soft music, warm brews, and a calm place to pause.",
    img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1900&q=80",
  },
  pub: {
    tag: "Pub",
    title: "Moss Bar & Lounge",
    desc: "Evenings with deep greens, moody glow and crafted drinks.",
    img: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=1900&q=80",
  },
  bakery: {
    tag: "Bakery",
    title: "Warm Oven Studio",
    desc: "Fresh bakes, subtle sweetness, and a comforting aroma.",
    img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1900&q=80",
  },
};

export const GALLERY = [
  {
    cap: "Pool Calm",
    alt: "Pool calm",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Lobby Glow",
    alt: "Hotel lobby",
    src: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Warm Rooms",
    alt: "Room interior",
    src: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Green Views",
    alt: "Forest view",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Dining Mood",
    alt: "Resort breakfast",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Suite Calm",
    alt: "Suite",
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Resort Pool",
    alt: "Resort pool",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    cap: "Comfort",
    alt: "Cozy bed",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];