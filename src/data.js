// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "Serenity Manor",
    description:
      "Soaring high above the city skyline, this sleek, contemporary residence is a testament to architectural innovation. Expansive glass walls showcase breathtaking city views, while smart home technology seamlessly integrates with daily life.",
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7 Cedar Boulevard, Los Angeles, CA, 90001",
    bedrooms: "3",
    bathrooms: "2",
    surface: "4000 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "550 456 22355",
    },
  },
  {
    id: 2,
    type: "House",
    name: "Victorian Mansion",
    description:
      "Step into a bygone era with this meticulously restored Victorian mansion. Intricate woodwork, stained glass windows, and a grand staircase evoke the charm of the past, while modern amenities seamlessly blend to offer a luxurious living experience.",
    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "23 Maple Street, Toronto, ON, M5A 1A1",
    bedrooms: "6",
    bathrooms: "4",
    surface: "5000 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "Luxor Haven",
    description:
      "Surrounded by towering evergreens and snow-capped peaks, this mountain chalet is a haven for winter enthusiasts. A stone fireplace, exposed wooden beams, and a hot tub with mountain views create the perfect retreat after a day on the slopes.",
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "23 Oak Street, Austin, TX, 78701",
    bedrooms: "4",
    bathrooms: "2",
    surface: "4500 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "558 456 78848",
    },
  },
  {
    id: 4,
    type: "House",
    name: "Regal Oaks Mansion",
    description:
      "Perched atop a scenic hill, this architectural marvel boasts panoramic views of the surrounding landscape. Floor-to-ceiling windows, an open-concept design, and a state-of-the-art kitchen make this contemporary retreat perfect for those who appreciate the harmony of modern living and nature.",
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "56 Pine Avenue, Vancouver, BC, V6B 2G1",
    bedrooms: "3",
    bathrooms: "3",
    surface: "4000 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "Palatial Pines Estate",
    description:
      "Embrace the elegance of yesteryear in this historic country estate. Manicured gardens, a sweeping driveway, and regal interiors featuring chandeliers and antique furnishings make this property a timeless showcase of refined living.",
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "2",
    bathrooms: "2",
    surface: "3000 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "223 456 4643",
    },
  },
  {
    id: 6,
    type: "House",
    name: "Elysian Fields Manor",
    description:
      "Overlooking the crystal-clear waters, this coastal sanctuary offers a private beach, seaside terrace, and nautical-inspired interiors. It's a haven for those seeking the soothing embrace of ocean breezes.",
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "1 Birch Road, Calgary, AB, T2P 3R5",
    bedrooms: "5",
    bathrooms: "4",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "403 566 7891",
    },
  },
  {
    id: 7,
    type: "Apartament",
    name: "Chic Cityscape Suite",
    description:
      "This centrally located suite combines chic design with urban convenience. Smart home technology, a gourmet kitchen, and curated art pieces make this apartment a stylish retreat in the heart of the city.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "7 Elm Crescent, Halifax, NS, B3H 4P6",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "403 987 2910",
    },
  },
  {
    id: 8,
    type: "Apartament",
    name: "Harborview Heights Flat",
    description:
      "Step into luxury in this penthouse residence featuring a private rooftop terrace. With panoramic cityscapes, an indoor-outdoor living concept, and high-end finishes, it's the pinnacle of urban sophistication.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "11 Spruce Avenue, Atlanta, GA, 30301",
    bedrooms: "3",
    bathrooms: "3",
    surface: "2000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "3343 452 7670",
    },
  },
  {
    id: 9,
    type: "Apartament",
    name: "Sunny Side Studio",
    description:
      "Perfect for the urban professional, this sunlit studio features large windows, a cozy reading nook, and a compact yet functional kitchen. It's a haven for those seeking simplicity and warmth in a bustling city.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "33 Magnolia Lane, Boston, MA, 02101",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1800 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "331 466 8734",
    },
  },
  {
    id: 10,
    type: "House",
    name: "Sustainable Smart Home",
    description:
      "Designed with the future in mind, this cutting-edge smart home integrates sustainable features seamlessly. Solar panels, energy-efficient systems, and smart home automation contribute to a green and tech-savvy living experience.",
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "2 Juniper Court, Edmonton, AB, T5J 2B4",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3300 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "404 952 2654",
    },
  },
  {
    id: 11,
    type: "House",
    name: "Contemporary Hillside Retreat",
    description:
      "Perched atop a scenic hill, this architectural marvel boasts panoramic views of the surrounding landscape. Floor-to-ceiling windows, an open-concept design, and a state-of-the-art kitchen make this contemporary retreat perfect for those who appreciate the harmony of modern living and nature.",
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "11 Pineapple Street, Quebec City, QC, G1K 3B6",
    bedrooms: "4",
    bathrooms: "4",
    surface: "6000 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "405 456 1000",
    },
  },
  {
    id: 12,
    type: "House",
    name: "Modish Midtown Penthouse",
    description:
      "Elevate your living experience in this stylish penthouse with floor-to-ceiling windows, a rooftop terrace, and sleek, modern furnishings. This residence embodies the epitome of midtown sophistication.",
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "333 456 7810",
    },
  },
  {
    id: 13,
    type: "House",
    name: "Greenview Gardens Apartment",
    description:
      "Immerse yourself in nature in this eco-friendly apartment nestled within a green community. Enjoy sustainable living, rooftop gardens, and panoramic views of lush landscapes.",
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "90 Spruce Boulevard, Winnipeg, MB, R3C 1A1",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "550 456 22355",
    },
  },
  {
    id: 14,
    type: "House",
    name: "Riviera Rivulet Residence",
    description:
      "Nestled alongside a gentle rivulet, this Mediterranean-inspired residence boasts terracotta tiles, arched doorways, and a sun-drenched courtyard. Experience the allure of the Riviera without leaving the comfort of home.",
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "222 456 7291",
    },
  },
  {
    id: 15,
    type: "House",
    name: "Casa del Sol Villa",
    description:
      "Radiating warmth and sunshine, Casa del Sol Villa captures the essence of Mediterranean living. With sunlit courtyards, vibrant gardens, and charming architecture, it's a haven bathed in perpetual sunshine.",
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "9 Oak Lane, Montreal, QC, H2X 1Y6",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "558 456 78848",
    },
  },
  {
    id: 16,
    type: "Apartament",
    name: "Verdant Valley Chalet",
    description:
      "Set against a backdrop of lush valleys, this chalet exudes alpine charm. With exposed beams, a roaring fireplace, and panoramic mountain views, it's a cozy retreat for all seasons.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, ON T2K 2E4",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "404 456 2910",
    },
  },
  {
    id: 17,
    type: "Apartament",
    name: "Skyline Symphony Condo",
    description:
      "Immerse yourself in the symphony of city lights from this contemporary condo. Floor-to-ceiling windows, a private balcony, and modern amenities make it an urban retreat for the discerning resident.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "223 456 4643",
    },
  },
  {
    id: 18,
    type: "Apartament",
    name: "Elysium Edge Apartment",
    description:
      "Located on the edge of paradise, this apartment offers stunning ocean vistas, direct beach access, and a fusion of modern design with coastal elegance. It's an idyllic escape for those seeking seaside serenity.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "3 Birch Avenue, Victoria, BC, V8W 1R2",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "403 566 7891",
    },
  },
];
