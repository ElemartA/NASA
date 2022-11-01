import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <nav>
          <ul className={s.header__nav}>
            <li className={s.header__list}>
              <Link to='' className={s.header__link}>
                Welcome
              </Link>
            </li>
            <li className={s.header__list}>
              <Link to='/search' className={s.header__link}>
                Search NASA Image
              </Link>
            </li>
            <li className={s.header__list}>
              <Link to='/picture' className={s.header__link}>
                Astronomy Picture of the Day
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.burger}>
        <div onClick={toggle} className={s.burger__wrap}>
          <img className={s.burger__menu} src='./galaxy_solar.svg' alt='menu'></img>
        </div>

        <div className={active ? `${s.burger__link + ' ' + s.visible}` : s.burger__link}>
          <nav>
            <ul className={s.header__nav}>
              <li className={s.header__list}>
                <Link to='' className={s.header__link}>
                  Welcome
                </Link>
              </li>
              <li className={s.header__list}>
                <Link to='/search' className={s.header__link}>
                  Search NASA Image
                </Link>
              </li>
              <li className={s.header__list}>
                <Link to='/picture' className={s.header__link}>
                  Picture of the Day
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
