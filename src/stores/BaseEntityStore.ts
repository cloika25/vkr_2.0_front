import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';
import { IViewModel } from '../types';
import {
  ErrorState,
  FetchingState,
  SuccessState,
  BaseState,
} from './StateStores';

/** Базовый стор сущности */
abstract class EntityBaseStore<D, VmT extends IViewModel<D>> {
  /** Состояние стора */
  @observable protected _state: BaseState = new BaseState();

  /** Вью модель стора */
  @observable public abstract viewModel: VmT;

  /** Состояние стора */
  @computed public get state() {
    return this._state;
  }

  constructor() {
    makeObservable(this);
  }

  /** Получение данных */
  public abstract fetch(id: number | string): Promise<void>;

  /** Сохранение данных */
  public abstract save(): Promise<void>;

  /** Выполнение кастомного метода с контролированием стейта */
  @action protected async runWithStateControl(func: () => (Promise<void> | void)) {
    this._state = new FetchingState();
    try {
      await func();
      runInAction(() => {
        this._state = new SuccessState();
      });
    } catch (e) {
      runInAction(() => {
        this._state = new ErrorState(e);
      });
    }
  }

  // #region Clear Methods

  /** Очистка стора */
  @action public clearStore() {
    this.viewModel.clear();
    this._state = new BaseState();
  }

  /** Очистка ошибки */
  @action public clearError() {
    this._state = new SuccessState();
  }

  // #endregion
}

export default EntityBaseStore;
