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

export interface iCommentRegister {
  description: string;
}

export interface iAdvertiseComments {
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
  comments: IComment[];
}

export interface IComment {
  id: string;
  description: string;
  user: iUser;
}

export interface iUserUpdate {
  name?: string;
  email?: string;
  profile_image?: string | undefined;
  password?: string;
  passwordConfirm?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  isSeller?: string | boolean;
  description?: string;
  addresses?: iAddressUpdate;
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

export interface iAddressUpdate {
  street?: string;
  number?: string | number;
  state?: string;
  city?: string;
  zipcode?: string;
  complement?: string;
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
  images: iImage[];
}

export interface iImage {
  image: string;
  id: string;
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
