import { computed, runInAction } from 'mobx';
import { GetCarByIdResponse } from '../../types/Car';
import BaseViewModel from '../BaseViewModel';

/** Вью модель машины */
class CarViewModel extends BaseViewModel<GetCarByIdResponse> {
  /** Марка */
  @computed get brand() {
    return this.data.details?.brand ?? '<No info>';
  }

  /** Марка */
  set brand(v: string) {
    runInAction(() => {
      if (!this.data.details) {
        this.data.details = {};
      }
      this.data.details.brand = v;
    });
  }

  /** Модель */
  @computed get model() {
    return this.data.details?.model ?? '<No info>';
  }

  /** Модель */
  set model(v: string) {
    runInAction(() => {
      if (!this.data.details) {
        this.data.details = {};
      }
      this.data.details.model = v;
    });
  }

  /** Полное название автомобиля */
  @computed get carFullName() {
    return `${this.brand} ${this.model}`;
  }

  /** Цена */
  @computed get formattedPrice() {
    return `${this.data.details?.price?.toLocaleString() ?? 0} $` ?? '<No info>';
  }

  /** Цвет */
  @computed get color() {
    return this.data.details?.color ?? '<No info>';
  }
}

export default CarViewModel;
