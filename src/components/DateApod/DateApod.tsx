import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { mainSlice } from '../../store/redusers/MainSlice';
import s from './DateApod.module.scss';

const DateApod = () => {
  const dayOfToday = new Date().toLocaleDateString();
  const [date, setDate] = useState(new Date().toLocaleDateString().replaceAll('.', '-'));
  //   const today = new Date();
  //   const dd = String(today.getDate()).padStart(2, '0');
  //   const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  //   const yyyy = today.getFullYear();

  //   const todayDay = mm + '-' + dd + '-' + yyyy;
  const dispatch = useAppDispatch();
  const { currentDate } = useAppSelector((state) => state.mainReducer);
  const { updatecurrentDate } = mainSlice.actions;

  const newDate = async (value: string) => {
    dispatch(updatecurrentDate(value));
  };
  useEffect(() => {
    newDate(date);
  }, [date]);
  return (
    <div className={s.wrap}>
      <Form.Control
        placeholder={date.replace(/[.]/g, '.')}
        onChange={(e) => setDate(e.target.value)}
        value={date}
        type='date'
      />
    </div>
  );
};

export default DateApod;
