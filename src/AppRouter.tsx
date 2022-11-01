import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Main from './pages/Main/Main';
import Picture from './pages/picture/Picture';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route key={'/'} path={'/'} element={<Main />} />
      <Route key={'/picture'} path={'/picture'} element={<Picture />} />
      <Route key={'/search'} path={'/search'} element={<Search />} />
      <Route />
    </Routes>
  );
};

export default AppRouter;
