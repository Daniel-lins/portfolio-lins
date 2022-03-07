import React from 'react';
import filmes from '../assets/img/filmes1.png';
import weather from '../assets/img/weather1.png';
import multi1 from '../assets/img/multi1.png';
import expenser from '../assets/img/expenser.png';
import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Desenvolvedor Front-end e estudante de analise e desenvolvimento de
            sistemas. Com foco no ReactJS.Uso typescript, Eslint, Prettier e
            EditorConfig para padronização de código.Sempre buscando uma
            organização de pastas e um código limpo.Uso git para o versionamento
            de código, Jest para fazer os testes das aplicações.
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiencia/Projetos</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-center text-center mb-5 card">
            <div className="resume-content">
              <h3 className="mb-0">Filmes react</h3>
              <div className="subheading mb-3">
                ReactJS | MaterialUI | Axios
              </div>
              <img src={filmes} alt="imagem do progejeto" width="500px" />
              <p text-align="center">
                {/* Projeto criado usando ReactJs , MateriealUI e axios.<br></br>No */}
                Para o projeto usei o axios para pegar informações da API do The
                Movie Database (TMDB).
                <br></br>
                Usei um custom hook para definição de genero dos filmes{' '}
                <br></br>
                Usei o Material UI tanto pra estilização como para criação do
                modal, para criação da paginação ... dentre outras coisas
              </p>{' '}
              <a
                target="_blank"
                href="https://filmes-react.vercel.app/"
                className="btn btn-primary mb:10px"
              >
                Acesso a aplicação
              </a>
              <br></br>
              <br></br>
              <a
                target="_blank"
                href="https://github.com/Daniel-lins/filmes-react"
                className="btn btn-primary"
              >
                Repositório{' '}
              </a>{' '}
              <br></br>
              <br></br>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-center text-center mb-5 card">
            <div className="resume-content">
              <h3 className="mb-0">Weather</h3>
              <div className="subheading mb-3">
                {' '}
                ReactJS | Typescript | Axios | Eslint | prettier | Styled
                Components
              </div>
              <img src={weather} alt="imagem do progejeto" width="500px" />
              <p>
                Projeto retirado do repositório de desáfios do felipe fialho.{' '}
                Projeto consiste na criação de um app de previsão do tempo. Para
                Para esse projeto usei o Axios para conseguir os dados da API
                (weatherapi.com).<br></br>
                Typescript para adicionar tipagem no código. <br></br>
                Eslint e Prettier para a padronização do código <br></br>E
                Styled Components para estilização
              </p>
              <a
                target="_blank"
                href="https://weather-app-rho-seven.vercel.app/"
                className="btn btn-primary mb:10px"
              >
                Acesso a aplicação
              </a>
              <br></br>
              <br></br>
              <a
                target="_blank"
                href="https://github.com/Daniel-lins/weather"
                className="btn btn-primary"
              >
                Repositório{' '}
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-center text-center mb-5 card">
            <div className="resume-content">
              <h3 className="mb-0">Multi Form</h3>
              <div className="subheading mb-3">
                {' '}
                ReactJS | Typescript | Context Api | Eslint | prettier | Styled
                Components
              </div>
              <img src={multi1} alt="imagem do progejeto" width="500px" />
              <p>
                Projeto feito na semana 5 em 5 do Boniek Lacerda.<br></br>
                Projeto consiste em um formulario de cadastro de programadores.
                Para Para esse projeto usei o context Api para gerenciar os
                dados de maneira global.<br></br>
                Typescript para adicionar tipagem no código. <br></br>
                Eslint e Prettier para a padronização do código <br></br>E
                Styled Components para estilização
              </p>
              <a
                target="_blank"
                href="https://multi-form-2.herokuapp.com/"
                className="btn btn-primary mb:10px"
              >
                Acesso a aplicação
              </a>
              <br></br>
              <br></br>
              <a
                target="_blank"
                href="https://github.com/Daniel-lins/multiform"
                className="btn btn-primary"
              >
                Repositório{' '}
              </a>
              <br></br>
              <br></br>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-center text-center mb-5 card">
            <div className="resume-content">
              <h3 className="mb-0">Expense Tracker</h3>
              <div className="subheading mb-3">
                {' '}
                ReactJS | Typescript | Eslint | prettier | Styled Components
              </div>
              <img src={expenser} alt="imagem do progejeto" width="500px" />
              <p>
                Projeto feito na semana 5 em 5 do Boniek Lacerda.<br></br>
                Projeto é um gerenciador financeiro .<br></br>
                Typescript para adicionar tipagem no código. <br></br>
                Eslint e Prettier para a padronização do código <br></br>E
                Styled Components para estilização
              </p>
              <a
                target="_blank"
                href="https://multi-form-2.herokuapp.com/"
                className="btn btn-primary mb:10px"
              >
                Acesso a aplicação
              </a>
              <br></br>
              <br></br>
              <a
                target="_blank"
                href="https://github.com/Daniel-lins/multiform"
                className="btn btn-primary"
              >
                Repositório{' '}
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">UNIVERSIDADE ESTÁCIO DE SÁ</h3>
              <div className="subheading mb-3">
                ANALISE E DESENVOLVIMENTO DE SISTEMAS
              </div>
              {/* <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Fevereiro de 2021 - Atualmente
              </span>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Designer responsivo
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Teste e depuração entre navegadores
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Desenvolvimento Ágil &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            além de codar, eu aproveito parte do meu tempo fazendo exercícios
            fisicos como correr ou jogar basquete. Também adoro assistir séries,
            animes e filmes e quando sobra algum tempo sair com amigos nem que
            seja pra trocar uma idéia.
            {/* Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking. */}
          </p>
          <p className="mb-0">
            Curto fazer projetos pessoais onde posso me desenvolver mais como
            programador além de me divertir os fazendo
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Conquistas e Certificações</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp HTML Web Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp SPTech Desenvolvimento Front-end
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Botcamp Become Remote
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Aceleração Global Dev #11 - Avanade
            </li>
            {/* <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
