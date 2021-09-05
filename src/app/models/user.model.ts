export interface UserDataPostService {
  mobile: string;
  device_os: string;
  device_id: string;
  device_model: string;
}

export interface UserResponseData {
  error: number;
  message: string;
  nickname: string;
}

export interface UserVerifyCodePost {
  mobile: string;
  device_id: string;
  verification_code: string;
  nickname: string;
}

export interface Credit {
  gem: number;
  coin: number;
  cash: number;
  price_unit: string;
}

export interface MagicCredit {
  gem: number;
  coin: number;
  cash: number;
  price_unit: string;
}

export interface IspData {
  description: string;
  net_name: string;
  net_name_custom?: any;
  logo?: any;
  color1?: any;
  color2?: any;
}

export interface RootObjectProfile {
  credit: Credit;
  magic_credit: MagicCredit;
  id: number;
  friends: any[];
  error: boolean;
  nickname: string;
  date_of_birth?: any;
  gender?: any;
  avatar: string;
  mobile: string;
  email?: any;
  has_supercollection: boolean;
  isp_data: IspData;
}
