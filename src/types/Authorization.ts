export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RegisterRequest {
  login: string;
  password: string;
  email: string;
  name: string;
  surname: string;
}

export type RegistrationForm = RegisterRequest & {
  confirmPassword: string;
}

export type RegisterResponse = LoginResponse
