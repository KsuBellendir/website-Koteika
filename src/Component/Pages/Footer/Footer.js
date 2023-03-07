import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaFacebook, FaInstagram,   FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md'
import './Footer.css';

import Button from '../../Button/Button';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            Присоединяйтесь к нашему эксклюзивному сообществу, чтобы получать последние новости и тенденции
            </p>
            <p className='footer-subscription-text'>
            Вы можете отказаться от подписки в любое время.
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Введите Email'/>
                    <Button buttonStyle='btn--outline'> Подписаться</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>О нас</h2>
                    <NavLink to="/sign-up">Как это работает</NavLink>
                    <NavLink to="/">Рекомендации</NavLink>
                    <NavLink to="/">Карера</NavLink>
                    <NavLink to="/">Инвесторам</NavLink>
                    <NavLink to="/">Условия обслуживания</NavLink>
                </div>
                <div className="footer-link-items">
                    <h2>Контакты</h2>
                    <NavLink to="/">Контакты</NavLink>
                    <NavLink to="/">Поддержка</NavLink>
                    <NavLink to="/">Спонсорство</NavLink>
                </div>
            </div>
           <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Видео</h2>
                <NavLink to="/">Отправить видео</NavLink>
                <NavLink to="/">Представитель</NavLink>
                <NavLink to="/">Агентство</NavLink>
                <NavLink to="/">Влияние</NavLink>
            </div>
                <div className='footer-link-items'>
                    <h2>Соцсети</h2>
                    <NavLink to='/'>Instagram</NavLink>
                    <NavLink to='/'>Facebook</NavLink>
                    <NavLink to='/'>Youtube</NavLink>
                    <NavLink to='/'>Twitter</NavLink>
                </div>
            </div> 
        </div>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <NavLink to='/' className='social-logo'>
                        <MdFingerprint className='navbar-icon'/>
                        КОТЕЙКА
                    </NavLink>
                </div>
                <small className='website-rights'>КОТЕЙКА © 2023</small>
                <div className="social-icons">
                    <NavLink className='social-icon-link' to='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook/>
                    </NavLink>
                    <NavLink className='social-icon-link' to='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram/>
                    </NavLink>
                    <NavLink className='social-icon-link' to='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube/>
                    </NavLink>
                    <NavLink className='social-icon-link' to='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter/>
                    </NavLink>
                    <NavLink className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin/>
                    </NavLink>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer