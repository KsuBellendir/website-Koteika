import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Button from '../Button/Button';
import './Pricing.css'

function Pricing() {
  return (
    <IconContext.Provider value={{color: '#fff', size: 64}}>
    <div className='pricing__section'>
        <div className="pricing__wrapper">
            <h1 className="pricing__heading">Прайс</h1>
            <div className="pricing__container">
                <NavLink to='/sign-up' className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <FaFire/>
                        </div>
                        <h3>Базовый</h3>
                        <h4>699</h4>
                        <p>в месяц</p>
                        <ul className='pricing__container-features'>
                            <li>100 Транзакций</li>
                            <li>2% кэшбэк</li>
                            <li>Лимит 800 000 рублей </li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='ptimary'>
                        Выберите план
                        </Button>
                    </div>
                </NavLink>
                <NavLink to='/sign-up' className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <BsXDiamondFill/>
                        </div>
                        <h3>Золотой</h3>
                        <h4>1999</h4>
                        <p>в месяц</p>
                        <ul className='pricing__container-features'>
                            <li>1000 Транзакций</li>
                            <li>3,5% кэшбэк</li>
                            <li>Лимит 1 500 000 рублей </li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                        Выберите план
                        </Button>
                    </div>
                </NavLink>
                <NavLink to='/sign-up' className='pricing__container-card'>
                    <div className="pricing__container-cardInfo">
                        <div className="icon">
                            <GiCrystalize/>
                        </div>
                        <h3>Бриллиантовый</h3>
                        <h4>7999</h4>
                        <p>в месяц</p>
                        <ul className='pricing__container-features'>
                            <li>Безлимитные транзакции</li>
                            <li>5% кэшбэк</li>
                            <li>Неограниченные расходы</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>
                        Выберите план
                        </Button>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Pricing