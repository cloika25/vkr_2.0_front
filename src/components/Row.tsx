import React from 'react';

export interface RowProps {
  /** Лейбл */
  title: string;
  /** Значение */
  value: string;
  /** Функция редактирования значения */
  onChange?: (v: string) => void;
}

/** Строка с данными */
const Row: React.FC<RowProps> = ({ title, value, onChange }) => (
  <div className="flex">
    <div className="w-40">{`${title}: `}</div>
    <input
      className={`flex-1 bg-transparent  ml-5 ${onChange ? 'cursor-text' : 'cursor-not-allowed'}`}
      disabled={!onChange}
      onChange={(e) => {
        if (onChange) {
          onChange(e?.target?.value);
        }
      }}
      type="text"
      value={value}
    />
  </div>
);

export default Row;
