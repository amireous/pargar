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
