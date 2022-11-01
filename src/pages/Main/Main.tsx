import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from '../../components/earth/Earth';
import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.anim}>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Main;
