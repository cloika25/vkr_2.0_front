import { LoginRequest, LoginResponse } from '../types/Authorization';
import { ApiConnection } from './ApiConnection';

export class AuthService {
  static get RoutePrefix(): string {
    return '/auth';
  }

  static async login(request: LoginRequest): Promise<LoginResponse> {
    const response = await ApiConnection.post(`${this.RoutePrefix}/login`, request);
    return response.data;
  }
}
