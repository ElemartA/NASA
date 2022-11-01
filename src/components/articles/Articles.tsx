import React, { FunctionComponent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import s from './Articles.module.scss';

type TArticles = {
  isVisible: boolean;
  title: string;
  description: string;
  href: string;
  date: string;
  onHide: () => void;
};

const Articles: FunctionComponent<TArticles> = ({
  isVisible,
  title,
  description,
  href,
  date,
  onHide,
}) => {
  const dateOfPicture = date.substr(0, date.indexOf('T'));

  return (
    <Modal show={isVisible} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title className={s.title}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className={s.body}>
            <div className={s.body__imgwrap}>
              <img className={s.body__img} src={href}></img>
            </div>

            <div className={s.body__block}>
              <div className={s.body__descr}>{description}</div>
              <div className={s.body__date}>{dateOfPicture}</div>
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default Articles;
