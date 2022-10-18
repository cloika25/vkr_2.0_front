import { EventsService } from '../../services/EventsService';
import { GetEventsByIdResponse } from '../../types/Events.types';
import EntityBaseStore from '../BaseEntityStore';
import { EventViewModel } from './EventViewModel';

export class EventStore extends EntityBaseStore<GetEventsByIdResponse, EventViewModel> {
  public viewModel = new EventViewModel({});

  public async fetch(id: string): Promise<void> {
    await this.runWithStateControl(async () => {
      const response = await EventsService.getById(id);
      this.viewModel = new EventViewModel(response);
    });
  }

  public save(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
