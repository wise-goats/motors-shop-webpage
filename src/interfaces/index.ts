export interface iUser {
  id: string;
  name: string;
  email: string;
  profile_image: string | undefined;
  password: string | number;
  cpf: string;
  phone: string;
  birthDate: string;
  isSeller: boolean;
  description: string;
}

export interface iUserRegister {
  name: string;
  email: string;
  profile_image: string | undefined;
  password: string;
  passwordConfirm: string;
  cpf: string;
  phone: string;
  birthDate: string;
  isSeller: string | boolean;
  description: string;
  addresses: iAddress;
}

export interface iAddress {
  street: string;
  number: string | number;
  state: string;
  city: string;
  zipcode: string;
  complement: string;
  isSeller?: boolean;
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
  user: iUser;
  images: string[];
}

export interface iUserProfile {
  id: string;
  name: string;
  email: string;
  profile_image: string | undefined;
  password: string | number;
  cpf: string;
  phone: string;
  birthDate: string;
  isSeller: boolean;
  description: string;
  advertisement: iAdvertisement[];
}
