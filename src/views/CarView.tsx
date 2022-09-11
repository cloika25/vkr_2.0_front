import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../hooks/useStores';
import Button from '../components/Button';
import { RowProps } from '../components/Row';
import CarCard from '../components/CarCard';

/** Вьюшка машины */
const CarView: React.FC = () => {
  /** Стор объектов */
  const { carStore } = useStores();

  useEffect(() => {
    carStore.fetch('1');
  }, []);

  /** Данные для карточки автомобиля */
  const rows: RowProps[] = [{
    title: 'Brand',
    value: carStore.viewModel.brand,
    onChange: (v) => {
      carStore.viewModel.brand = v;
    },
  }, {
    title: 'Model',
    value: carStore.viewModel.model,
    onChange: (v) => {
      carStore.viewModel.model = v;
    },
  }, {
    title: 'Price',
    value: carStore.viewModel.formattedPrice,
  }, {
    title: 'Color',
    value: carStore.viewModel.color,
  }];

  return (
    <div className="flex flex-1 flex-col">
      <CarCard
        header={carStore.viewModel.carFullName}
        rows={rows}
      />
      <div className="flex flex-row justify-between my-5">
        <Button
          className="w-60"
          onClick={() => {
            carStore.fetch('1');
          }}
          title="Fetch"
        />
        <Button
          className="w-60"
          onClick={() => {
            carStore.clearStore();
          }}
          title="Clear"
        />
      </div>

      {JSON.stringify(carStore.viewModel.getRawData())}
    </div>
  );
};

export default observer(CarView);
