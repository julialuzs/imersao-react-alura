import React from 'react';
import { FooterBase } from './styles';
import julia from '../../assets/julia-branco.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/julialuzs">
        <img src={julia} alt="Julia" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
