import React, { useState } from 'react';
import Resultado from './components/Resultado';
import Placar from './components/Placar';
import './App.css';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const Jogo = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [resultado, setResultado] = useState('');
  const [placarJogador, setPlacarJogador] = useState(0);
  const [placarComputador, setPlacarComputador] = useState(0);
  const [empates, setEmpates] = useState(0);

  const handleEscolhaJogador = (escolha) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaJogador(escolha);
    setEscolhaComputador(escolhaComputador);

   
    if (escolhaJogador === escolhaComputador) {
      setEmpates(empates + 1);
      setResultado('Empate!');
    } else if (
      (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      setPlacarJogador(placarJogador + 1);
      setResultado('Você venceu!');
    } else {
      setPlacarComputador(placarComputador + 1);
      setResultado('Computador venceu!');
    }
  };

  const resetJogo = () => {
  
  };

  return (
    <div>
      
      <div>
        <button onClick={() => handleEscolhaJogador('Pedra')}>Pedra</button>
        <button onClick={() => handleEscolhaJogador('Papel')}>Papel</button>
        <button onClick={() => handleEscolhaJogador('Tesoura')}>Tesoura</button>
      </div>
      <Resultado resultado={resultado} />
      <Placar
        placarJogador={placarJogador}
        placarComputador={placarComputador}
        empates={empates}
      />
      <button onClick={resetJogo}>Jogar Novamente</button>
    </div>
  );
};

export default Jogo;
