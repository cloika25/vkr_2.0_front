import {
  action, computed, makeObservable, observable, runInAction, toJS,
} from 'mobx';
import { EntityList, ListBaseFilter } from '../types';
import {
  ErrorState,
  FetchingState,
  SuccessState,
  BaseState,
} from './StateStores';

/** Базовый стор списка сущностей */
abstract class BaseEntityListStore<EntityT, FilterT extends ListBaseFilter, VmT> {
  /** Состояние стора */
  @observable protected _state = new BaseState();

  /** Фильтр */
  @observable protected _filter: Partial<FilterT>;

  /** Данные респонса */
  @observable private _data: EntityT[] = [];

  /** Вью модель стора */
  @observable protected _viewModel: VmT[] = [];

  /** Всего записей */
  @observable protected _totalCount = 0;

  /** Состояние стора */
  @computed public get state() {
    return this._state;
  }

  /** Вью модель стора */
  @computed public get viewModel() {
    return this._viewModel;
  }

  /** Всего записей */
  @computed public get totalCount() {
    return this._totalCount;
  }

  /** Фильтр */
  @computed public get filter() {
    return this._filter;
  }

  // #region Pagination Computed Fields

  /** Размер страницы */
  @computed public get pageSize() {
    return this.filter.pageSize ?? 0;
  }

  /** Количество страниц */
  @computed public get pageCount() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.totalCount / this.pageSize);
  }

  /** Текущая страница */
  @computed public get currentPage() {
    return this.filter.pageNumber ?? 1;
  }

  /** Есть ли предыдущая страница */
  @computed public get canGoPrev() {
    return this.currentPage > 1;
  }

  /** Есть ли следующая страница */
  @computed public get canGoNext() {
    return this.currentPage < this.pageCount;
  }

  // #endregion

  constructor(pageSize = 25) {
    this._filter = {};
    this._filter.pageNumber = 1;
    this._filter.pageSize = pageSize;
    makeObservable(this);
  }

  /** Абстрактный метод получения данных */
  public abstract fetch(): Promise<void>;

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

  /** Получить объект с данными */
  public getRawData() {
    return toJS(this._data);
  }

  /** Установить данные респонса */
  @action public setData(data: EntityList<EntityT>, VmtFactory: { new (e: EntityT): VmT }) {
    this._data = data.entities ?? [];
    this._viewModel = data.entities?.map((e) => new VmtFactory(e)) ?? [];
    this._totalCount = data.totalCount ?? 0;
  }

  // #region Pagination Helper Methods

  /** Перейти на предыдущую страницу */
  @action public async loadPrevPage() {
    if (this.canGoPrev) {
      this._filter = {
        ...this._filter,
        pageNumber: this.currentPage - 1,
      };
      await this.fetch();
    }
  }

  /** Перейти на следующую страницу */
  @action public async loadNextPage() {
    if (this.canGoNext) {
      this._filter = {
        ...this._filter,
        pageNumber: this.currentPage + 1,
      };
      await this.fetch();
    }
  }

  /** Перейти к странице */
  @action public async loadPage(page: number) {
    this._filter = {
      ...this._filter,
      pageNumber: Math.min(page, this.pageCount),
    };
    await this.fetch();
  }

  // #endregion

  // #region Clear Methods

  /** Очистка стора */
  @action public clearStore() {
    this._data = [];
    this._viewModel = [];
    this._totalCount = 0;
    this._state = new BaseState();
    this.clearFilter();
  }

  /** Очистка ошибки */
  @action public clearError() {
    this._state = new SuccessState();
  }

  /** Очистка фильтра */
  @action public clearFilter() {
    this._filter = {};
    this._filter.pageNumber = 1;
    this._filter.pageSize = 20;
  }

  // #endregion
}

export default BaseEntityListStore;
