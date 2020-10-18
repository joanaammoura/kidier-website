import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__grid">
        <section className="footer__section footer__section1">
          <img
            className="header__logo"
            src={require('../../resources/images/logo_large.svg')}
            alt="kidier logo"
          />
        </section>
        <section className="footer__section footer__section2">
          <h4>Sobre</h4>
          <ul>
            <li>Como funciona a Kidier</li>
            <li>Blog</li>
          </ul>
        </section>
        <section className="footer__section footer__section3">
          <h4>Parceiros</h4>
          <ul>
            <li>Torne-se Parceiro</li>
            <li>Serviços</li>
          </ul>
        </section>
        <section className="footer__section footer__section4">
          <h4>Ajuda</h4>
          <ul>
            <li>FAQs</li>
            <li>Contactos</li>
          </ul>
        </section>
        <section className="footer__section footer__section5">
          <h4>Siga-nos</h4>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </section>
      </div>
      <div className="footer__end">
        <span>© 2020 Kidier Todos os direitos reservados</span>
        <span> · </span>
        <a>Termos e Condições</a>
        <span> · </span>
        <a>Privacidade</a>
      </div>
    </div>
  );
}

export default Footer;
