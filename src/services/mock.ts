import { iUser, iAdvertisement } from "../interfaces";

const lorem = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna 
aliqua. In nibh mauris cursus mattis molestie 
a iaculis at. Sit amet cursus sit amet. At tellus
 at urna condimentum. Sed vulputate mi sit amet mauris. 
 Consequat nisl vel pretium lectus quam id leo in. 
 Et ultrices neque ornare aenean euismod elementum nisi quis. 
 Sem nulla pharetra diam sit amet nisl suscipit adipiscing. 
 Nunc vel risus commodo viverra. Libero justo laoreet sit amet. 
 Phasellus vestibulum lorem sed risus ultricies tristique nulla 
 aliquet enim.`;

const userMock: iUser = {
  id: "af285200-95c7-4ac7-8bc5-ea5b669f010b",
  name: "Test User",
  email: "testUser@mail.com",
  profile_image: "https://picsum.photos/400",
  password: 123456,
  cpf: "012.345.678-90",
  phone: "(99) 9 9999-9999",
  birthDate: "11-11-2011",
  isSeller: false,
  description: lorem,
};

const advertiserMock: iUser = {
  id: "104f2dfe-7644-4346-9e16-f48bbfedfef2",
  name: "Test Advertiser",
  email: "testAdvertiser@mail.com",
  profile_image: "https://picsum.photos/400",
  password: 123456,
  cpf: "987.654.321-09",
  phone: "(88) 8 8888-8888",
  birthDate: "11-11-2011",
  isSeller: true,
  description: lorem,
};

const advertisementsMock: iAdvertisement[] = [
  {
    id: "196a59a6-5fc9-45db-841a-1d3db6b94f0c",
    brand: "Citroën",
    model: "C4 CACTUS Rip Curl 1.6 16V Flex Aut.",
    year: 2022,
    fuel: 1,
    mileage: 20000,
    color: "Black",
    fipePrice: 112077,
    price: 15000,
    descripition: lorem,
    is_active: true,
    seller: advertiserMock,
    images: [
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
    ],
  },
  {
    id: "3d03b1bb-e918-4839-8a4a-ba24846fa588",
    brand: "Citroën",
    model: "AIRCROSS Live Bus. 1.6 Flex 5p Aut.",
    year: 2020,
    fuel: 1,
    mileage: 20000,
    color: "Red",
    fipePrice: 71912,
    price: 70000,
    descripition: lorem,
    is_active: false,
    seller: advertiserMock,
    images: [
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
      "https://picsum.photos/400",
    ],
  },
];

export { lorem, userMock, advertiserMock, advertisementsMock };
