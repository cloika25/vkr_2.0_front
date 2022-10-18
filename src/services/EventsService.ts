import { GetEventsByIdResponse, GetEventsResponse } from '../types/Events.types';
import { ApiConnection } from './ApiConnection';

export class EventsService {
  static get RoutePrefix(): string {
    return '/Events';
  }

  static async list(): Promise<GetEventsResponse> {
    const response = await ApiConnection.get(this.RoutePrefix);
    return response.data;
  }

  static async getById(id: string): Promise<GetEventsByIdResponse> {
    const response = await ApiConnection.get(`${this.RoutePrefix}/${id}`);
    return response.data;
  }
}
