import {
  computed, makeObservable, observable, toJS,
} from 'mobx';
import { IViewModel } from '../types';

/** Вью модель */
class BaseViewModel<T> implements IViewModel<T> {
  /** Данные респонса */
  @observable private _data: Partial<T>;

  /** Данные респонса */
  @computed get data() {
    return this._data;
  }

  constructor(data: Partial<T>) {
    this._data = data;
    makeObservable(this);
  }

  /** Получить объект с данными */
  public getRawData() {
    return toJS(this._data);
  }

  /** Очистить вью модель */
  public clear() {
    this._data = {};
  }
}

export default BaseViewModel;
