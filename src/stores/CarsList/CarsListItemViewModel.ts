import { computed, makeObservable } from 'mobx';
import { GetCarByIdResponse } from '../../types/Car';

/** Вью модель элемента списка */
class CarsListItemViewModel {
  /** Данные респонса */
  private data: GetCarByIdResponse;

  constructor(data: GetCarByIdResponse) {
    this.data = data;
    makeObservable(this);
  }

  /** Идентификатор */
  @computed get id() {
    return this.data.id ?? '<No info>';
  }

  /** Полное название автомобиля */
  @computed get carFullName() {
    return `${this.data.details?.brand} ${this.data?.details?.model}`;
  }

  /** Цвет */
  @computed get color() {
    return this.data.details?.color ?? '<No info>';
  }

  /** Цена */
  @computed get formattedPrice() {
    return `${this.data.details?.price?.toLocaleString() ?? 0} $` ?? '<No info>';
  }
}

export default CarsListItemViewModel;
