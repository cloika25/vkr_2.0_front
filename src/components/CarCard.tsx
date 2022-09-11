import React from 'react';
import Row, { RowProps } from './Row';

interface Props {
  /** Лейбл */
  header: string;
  /** Значение */
  rows: Array<RowProps>;
}

/** Строка с данными */
const CarCard: React.FC<Props> = ({ header, rows }) => (
  <div className="mb-10">
    <div className="text-2xl bold font-semibold mb-5">
      {header}
    </div>
    {rows.map((r) => (
      <Row
        key={r.title}
        onChange={r.onChange}
        title={r.title}
        value={r.value}
      />
    ))}
  </div>
);

export default CarCard;
