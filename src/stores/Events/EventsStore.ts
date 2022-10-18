import { EventsService } from '../../services/EventsService';
import { EventsDto } from '../../types/Events.types';
import BaseEntityListStore from '../BaseEntityListStore';
import { EventsViewModel } from './EventsViewModel';

/** Стор реестра машин */
export class EventsStore extends BaseEntityListStore<EventsDto, {}, EventsViewModel> {
  constructor() {
    super(10);
  }

  /** Получение списка */
  public async fetch(): Promise<void> {
    this.runWithStateControl(async () => {
      const data = await EventsService.list();
      this.setData(data, EventsViewModel);
    });
  }
}
