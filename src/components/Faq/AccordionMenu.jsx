import React from "react";
import "./style.css";

function AccordionMenu() {
    const source = [
        {
            summary: 'O que é psicologia da família?',
            detail: 'A psicologia da família é uma área da psicologia que se concentra no estudo e tratamento dos relacionamentos familiares. O objetivo é ajudar a melhorar a comunicação, a cooperação e a compreensão entre os membros da família, visando promover o bem-estar emocional de todos.',
        },
        {
            summary: 'Quais são os tipos de problemas que um psicólogo da família pode ajudar a resolver?',
            detail: 'Um psicólogo da família pode ajudar com uma ampla gama de questões familiares, incluindo conflitos conjugais, problemas de comunicação, dificuldades na educação dos filhos, separação e divórcio, problemas financeiros, problemas com a saúde mental de um membro da família, e muitos outros.',
        },
        {
            summary: 'Como funciona a terapia familiar?',
            detail: 'A terapia familiar é um tipo de terapia em que o psicólogo trabalha com toda a família, buscando compreender suas dinâmicas e identificar os padrões de comportamento que estão prejudicando o convívio. Durante as sessões, são utilizadas técnicas específicas para promover a comunicação, melhorar a empatia e ajudar a família a encontrar soluções para seus problemas.',
        },
        {
            summary: 'Quanto tempo dura a terapia familiar?',
            detail: 'Não há uma duração fixa para a terapia familiar, pois isso depende das necessidades e objetivos de cada família. Algumas famílias podem precisar de poucas sessões, enquanto outras podem precisar de um acompanhamento mais longo.',
        },
        {
            summary: 'Como escolher um bom psicólogo da família?',
            detail: 'Para escolher um bom psicólogo da família, é importante buscar referências de amigos e familiares, verificar a formação e experiência do profissional, além de agendar uma primeira consulta para conhecer melhor seu trabalho e verificar se existe uma boa empatia entre a família e o psicólogo.',
        },
    ]

  return (
    <div className="containerFaq">

      {source.map((item) => (
        <details>
            <summary>{item.summary}</summary> <p className="conatainerFaq__text" >{item.detail}</p> 
        </details>
      ))}


    </div>
  );
}

export default AccordionMenu;
