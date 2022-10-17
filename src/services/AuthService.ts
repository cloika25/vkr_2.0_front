import {
  LoginRequest, LoginResponse, RegisterRequest, RegisterResponse,
} from '../types/Authorization';
import { ApiConnection } from './ApiConnection';

export class AuthService {
  static get RoutePrefix(): string {
    return '/auth';
  }

  static async login(request: LoginRequest): Promise<LoginResponse> {
    const response = await ApiConnection.post(`${this.RoutePrefix}/login`, request);
    return response.data;
  }

  static async register(request: RegisterRequest): Promise<RegisterResponse> {
    const response = await ApiConnection.post(`${this.RoutePrefix}/register`, request);
    return response.data;
  }
}
