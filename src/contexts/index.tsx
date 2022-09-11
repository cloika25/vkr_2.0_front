import { createContext } from 'react';
import CarStore from '../stores/Car/CarStore';
import CarsListStore from '../stores/CarsList/CarsListStore';

export const storeContext = createContext({
  carStore: new CarStore(),
  carsListStore: new CarsListStore(),
});
