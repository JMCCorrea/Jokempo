import React from 'react';

const Placar = ({ placarJogador, placarComputador, empates }) => {
  return (
    <div>
      <h2>Placar</h2>
      <p>Jogador: {placarJogador}</p>
      <p>Computador: {placarComputador}</p>
      <p>Empates: {empates}</p>
    </div>
  );
};

export default Placar;
