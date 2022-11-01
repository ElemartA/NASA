import React, { FunctionComponent, useEffect, useState } from 'react';
import s from './OneCard.module.scss';
import { Card } from 'react-bootstrap';
import Preloader from '../preloader/Preloader';

type TPropsOneCard = {
  title: string;
  description: string;
  href: string;
  date: string;
  onClick: () => void;
};

const OneCard: FunctionComponent<TPropsOneCard> = ({ title, description, href, date, onClick }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch(`${href}`)
      .then((response) => response.blob())
      .then((image) => {
        setUrl(URL.createObjectURL(image));
      });
  });

  return (
    <div>
      {!url ? (
        <Preloader />
      ) : (
        <Card
          onClick={onClick}
          className='bg-dark text-white'
          style={{ margin: 15, maxWidth: 380, boxShadow: '0px 1px 15px 2px black' }}
        >
          <Card.Img src={url} alt='Card image' className={s.img} />
          {/* <Card.ImgOverlay className={s.block}>
          <div className={s.block__title}>
            <Card.Title className={s.title}>{title}</Card.Title>
          </div>
        </Card.ImgOverlay> */}
        </Card>
      )}
    </div>
  );
};

export default OneCard;
