import {
  CreateEventForm, GetEventsByIdResponse, GetEventsResponse,
} from '../types/Events.types';
import { ApiConnection } from './ApiConnection';

export class EventsService {
  static get RoutePrefix(): string {
    return '/Events';
  }

  static async create(data: CreateEventForm): Promise<{ id: string }> {
    const response = await ApiConnection.post(this.RoutePrefix, data);
    return response.data;
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
