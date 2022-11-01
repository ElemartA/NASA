import React, { FormEventHandler, FunctionComponent } from 'react';
import s from './SearchField.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

type TSearch = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

const SearchField: FunctionComponent<TSearch> = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className={s.form} action=''>
        <div className={s.search}>
          <input
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={value}
            type='text'
            className={s.searchTerm}
            placeholder='Search for ... (e.g. "Earth")'
          ></input>
          <button type='submit' className={s.searchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
