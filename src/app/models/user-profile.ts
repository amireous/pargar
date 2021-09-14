export interface Data {
  nickname: string;
  email?: any;
  mobile: string;
  avatar: string;
  gender?: any;
  date_of_birth?: any;
  is_official: boolean;
  limit_age?: any;
}

export interface UpdateAvatarData {
  error: boolean;
  message: string;
  data: Data;
}
