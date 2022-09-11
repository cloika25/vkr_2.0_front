import { GetCarByIdResponse } from '../../types/Car';
import EntityBaseStore from '../BaseEntityStore';
import CarViewModel from './CarViewModel';

/** Стор машины */
class CarStore extends EntityBaseStore<GetCarByIdResponse, CarViewModel> {
  public viewModel = new CarViewModel({});

  /** Фетч машины */
  public override async fetch(id: string): Promise<void> {
    this.runWithStateControl(async () => {
      // const data = CarService.detail(id);
      const data: GetCarByIdResponse = {
        id,
        details: {
          brand: 'Mercedes Benz AMG',
          model: 'One',
          price: 100_000_000,
          color: 'Silver Arrow',
        },
      };
      this.viewModel = new CarViewModel(data);
    });
  }

  public save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /** Возвращает объект, который отправится в апи при сохранении */
  public getSaveData(): string {
    return JSON.stringify(this.viewModel.data);
  }
}

export default CarStore;
