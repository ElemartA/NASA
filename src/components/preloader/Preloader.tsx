import React from 'react';
import s from './Preloader.module.scss';

const Preloader = (): JSX.Element => {
  return (
    <div className={s.wrap}>
      <div className={s.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
