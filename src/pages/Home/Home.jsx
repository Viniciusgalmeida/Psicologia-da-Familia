import React from "react";
import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header/MenuDesktop";
import MenuMobile from "../../components/Header/MenuMobile";
import psicologo1 from "../../assets/psicologo1.png";
import "./styles.css";
import ButtonSchedule from "../../components/ButtonSchedule/ButtonSchedule";
import logoBlue from "../../assets/logoBlue.svg";
import logoWhite from "../../assets/logoWhite.svg";
import conflict from "../../assets/conflict.svg";
import saudeemocional from "../../assets/saudeemocional.svg";
import bemestar from "../../assets/bemestar.svg";
import heart from "../../assets/heart.svg";
import Carousel from "../../components/Carousel/Carousel";
import Faq from "../../components/Faq/Faq";

function Home() {
  return (
    <div>
      <Header />
      <MenuMobile />
      <main className="container">
        <article className="container__article">
          <div className="container__Principal">
            <div className="container__Title">
              <h1 className="container__article--pageTitle">Amaral Ramos</h1>
              <h2 className="container__article--pageSubtitle">PSICÓLOGO</h2>
              <p className="container__article--pageSubheading">
                Especialista em psicologia da família
              </p>
              <div className="buttonSchelue__Deskt">
                <ButtonSchedule />
              </div>
            </div>
            <img src={psicologo1} className="container__article--psychoImage" />
            <div className="buttonSchelue__Mobile">
              <ButtonSchedule />
            </div>
          </div>

          <div className="aboutArea">
            <h2 className="aboutArea__Title">Sobre</h2>
            <p className="aboutArea__Text">
              Como psicólogo da família, minha profissão é trabalhar com
              famílias que estejam passando por dificuldades, conflitos ou
              problemas em suas relações.
              <br />
              <br />
              Meu objetivo é ajudar essas famílias a se comunicarem melhor, a
              entenderem as necessidades e sentimentos uns dos outros e a
              encontrar formas de lidar com os desafios que surgem na vida.
              <br />
              <br />
              
              Também podemos oferecer suporte em situações de separação,
              divórcio, adoção ou doenças na família.
              <br />
              <br />
              
              Por isso, muitas famílias buscam a ajuda de um psicólogo da
              família para melhorar sua qualidade de vida e bem-estar emocional,
              mesmo quando não estão passando por crises.
            </p>
          </div>
          <div className="bannerWhite">
            <img src={logoBlue} className="bannerWhite__logo" />
            <div>
              <p className="bannerWhite__text">
                “Com a ajuda de um psicólogo, as famílias podem{" "}
                <strong>
                  aprender a se comunicar melhor e a lidar com os desafios{" "}
                </strong>{" "}
                que surgem no caminho”
              </p>
              <ButtonSchedule />
            </div>
          </div>
          <div className="parallax"></div>
          <div className="areasAtuacao">
            <p className="aboutArea__Title">Áreas de atuação</p>
            <div className="areasAtuacao__Container">
              <div className="areasAtuacao__Card">
                <img src={conflict} className="icon" />
                <p className="aboutArea__Text--Title">Resolução de conflitos</p>
                <p className="aboutArea__Text">
                  <br />O psicólogo da família é treinado para ajudar a resolver
                  conflitos dentro da dinâmica familiar. Existem várias maneiras
                  pelas quais o psicólogo da família pode ajudar a resolver
                  conflitos identificando a causa raiz do conflito, melhorando a
                  comunicação, identificando soluções criativas e promovendo o
                  respeito mútuo entre os membros da família.
                </p>
              </div>
              <div className="areasAtuacao__Card">
                <img src={saudeemocional} className="icon" />
                <p className="aboutArea__Text--Title">Saude emocional</p>
                <p className="aboutArea__Text">
                  <br />O psicólogo da família pode ajudar a promover a saúde
                  emocional da família através da identificação de problemas
                  emocionais, oferecendo aconselhamento individual e familiar,
                  medindo conflitos, ensinando habilidades de comunicação e
                  promovendo o bem-estar emocional em casa.
                </p>
              </div>
              <div className="areasAtuacao__Card">
                <img src={bemestar} className="icon" />
                <p className="aboutArea__Text--Title">Bem estar</p>
                <p className="aboutArea__Text">
                  <br />O psicólogo da família pode ajudar no bem-estar da
                  família através da identificação e tratamento de problemas de
                  saúde mental, promoção da comunicação saudável, resolução de
                  conflitos, ensino de habilidades de resiliência e promoção do
                  bem-estar físico.
                </p>
              </div>
              <div className="areasAtuacao__Card">
                <img src={heart} className="icon" />
                <p className="aboutArea__Text--Title">Aconselhamento</p>
                <p className="aboutArea__Text">
                  <br />O psicólogo da família é treinado para ajudar a resolver
                  conflitos dentro da dinâmica familiar. Existem várias maneiras
                  pelas quais o psicólogo da família pode ajudar a resolver
                  conflitos identificando a causa raiz do conflito, melhorando a
                  comunicação, identificando soluções criativas e promovendo o
                  respeito mútuo entre os membros da família.
                </p>
              </div>
            </div>
          </div>
          <div className="depoimento">
            <h2 className="depoimento__Title">Depoimentos</h2>
            <p className="depoimento__Text">
              Veja o que nossos pacientes dizem a respeito da terapia:
            </p>

            <Carousel />
          </div>
          <div className="bannerYellow">
            <img src={logoWhite} className="bannerWhite__logo" />
            <div>
              <p className="bannerWhite__text">
                “Com a ajuda de um psicólogo, as famílias podem{" "}
                <strong>
                  aprender a se comunicar melhor e a lidar com os desafios{" "}
                </strong>{" "}
                que surgem no caminho”
              </p>
              <ButtonSchedule />
            </div>
          </div>
          <Faq />
        </article>
      </main>

      <ButtonToTop />
      <Footer />
    </div>
  );
}

export default Home;
