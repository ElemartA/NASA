import React, { useEffect } from 'react';
import DateApod from '../../components/DateApod/DateApod';
import Preloader from '../../components/preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPicture } from '../../store/ActionCreators';
import { mainSlice } from '../../store/redusers/MainSlice';
import s from '../picture/Picture.module.scss';

const Photo = (): JSX.Element => {
  const { data, isLoading, currentDate } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  const { updatecurrentDate } = mainSlice.actions;
  const getPicture = async () => {
    dispatch(fetchPicture(currentDate));
  };

  useEffect(() => {
    getPicture();
  }, [data.title, currentDate]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={s.wrap}>
          <div>
            <DateApod />
            <div className={s.wrap__date}>{data.date}</div>
            <div className={s.wrap__title}>{data.title}</div>
            <div className={s.wrap__explanation}>{data.explanation}</div>
            <img className={s.wrap__img} title={data.title} src={data.url}></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Photo;
