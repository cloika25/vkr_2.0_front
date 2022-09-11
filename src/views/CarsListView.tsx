import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../hooks/useStores';
import CarCard from '../components/CarCard';
import Button from '../components/Button';

const CarsListView: React.FC = () => {
  /** Стор объектов */
  const { carsListStore } = useStores();

  useEffect(() => {
    carsListStore.fetch();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <div className="text-3xl bold font-semibold">
        Cars List
      </div>
      <div className="my-5">
        {`canGoNext: ${carsListStore.canGoNext}`}
        <br />
        {`canGoPrev: ${carsListStore.canGoPrev}`}
        <br />
        {`currentPage: ${carsListStore.currentPage}`}
        <br />
        {`pageSize: ${carsListStore.pageSize}`}
        <br />
        {`pageCount: ${carsListStore.pageCount}`}
        <br />
        {`totalCount: ${carsListStore.totalCount}`}
      </div>
      {carsListStore.viewModel.map((vm) => (
        <CarCard
          key={vm.id}
          header={vm.carFullName}
          rows={[{
            title: 'Price',
            value: vm.formattedPrice,
          }, {
            title: 'Color',
            value: vm.color,
          }]}
        />
      ))}
      <div className="flex flex-row justify-between my-5">
        <Button
          className="w-60"
          onClick={() => {
            carsListStore.fetch();
          }}
          title="Fetch"
        />
        <Button
          className="w-60"
          onClick={() => {
            carsListStore.clearStore();
          }}
          title="Clear"
        />
      </div>
    </div>
  );
};

export default observer(CarsListView);
