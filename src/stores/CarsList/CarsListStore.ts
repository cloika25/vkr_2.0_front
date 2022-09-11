import { EntityList } from '../../types';
import { GetCarByIdResponse, GetCarsListRequest } from '../../types/Car';
import BaseEntityListStore from '../BaseEntityListStore';
import CarsListItemViewModel from './CarsListItemViewModel';

/** Стор реестра машин */
class CarsListStore extends BaseEntityListStore<GetCarByIdResponse, GetCarsListRequest, CarsListItemViewModel> {
  constructor() {
    super(50);
  }

  /** Получение списка */
  public async fetch(): Promise<void> {
    this.runWithStateControl(() => {
      // const data = CarService.list(this.filter);
      const data: EntityList<GetCarByIdResponse> = {
        entities: [{
          id: '1',
          details: {
            brand: 'Mercedes Benz AMG',
            model: 'One',
            price: 100_000_000,
            color: 'Silver Arrow',
          },
        }, {
          id: '2',
          details: {
            brand: 'Aston Martin',
            model: 'Valkyrie',
            price: 100_000_000,
            color: 'Slipstream Green',
          },
        }],
        totalCount: 10,
      };
      this.setData(data, CarsListItemViewModel);
    });
  }
}

export default CarsListStore;
