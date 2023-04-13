export interface iUser {
  id: string;
  name: string;
  email: string;

  profile_image: string | null;
  password: string | number;
  cpf: string;
  phone: string;
  birthDate: string;
  isSeller: boolean;
  description: string;
}

export interface iAdvertisement {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  mileage: number;
  color: string;
  fipePrice: number;
  price: number;
  descripition: string;
  is_active: boolean;
  seller: iUser;
  images: string[];
}
