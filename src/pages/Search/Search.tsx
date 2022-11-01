import React, { useEffect, useState } from 'react';
import Articles from '../../components/articles/Articles';
import OneCard from '../../components/OneCard/OneCard';
import Preloader from '../../components/preloader/Preloader';
import SearchField from '../../components/Search/SearchField';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchMain } from '../../store/ActionCreators';
import { mainSlice } from '../../store/redusers/MainSlice';
import s from './Search.module.scss';

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { searchData, value, isLoading } = useAppSelector((state) => state.mainReducer);
  const { updateValue } = mainSlice.actions;
  const [isVisible, setIsVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [href, setHref] = useState('');
  const [date, setDate] = useState('');

  const getInfo = async () => {
    dispatch(
      fetchMain({
        value: value,
      }),
    );
  };

  const newValue = async (text: string) => {
    dispatch(updateValue(text));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getInfo();
  };

  return (
    <div>
      <SearchField
        value={value}
        onChange={(value: string) => {
          newValue(value);
        }}
        onSubmit={handleSubmit}
      />
      {/* {isLoading && <Preloader />} */}
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={s.wrap}>
          <div className={s.column}>
            {searchData.map(
              (item, index) =>
                item.links && (
                  <OneCard
                    key={index}
                    description={item.data[0].description}
                    title={item.data[0].title}
                    href={item.links[0].href}
                    date={item.data[0].date_created}
                    onClick={() => {
                      setIsVisible(true);
                      setDescription(item.data[0].description);
                      setTitle(item.data[0].title);
                      setHref(item.links[0].href);
                      setDate(item.data[0].date_created);
                    }}
                  />
                ),
            )}
          </div>
        </div>
      )}
      <Articles
        onHide={() => setIsVisible(false)}
        isVisible={isVisible}
        title={title}
        description={description}
        href={href}
        date={date}
      />
    </div>
  );
};

export default Search;
