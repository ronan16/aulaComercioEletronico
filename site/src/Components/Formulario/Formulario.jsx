import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ campos, onSubmit }) => {
  const [dadosDoFormulario, setDadosDoFormulario] = useState({});

  const eventoChange = (campo, valor) => {
    setDadosDoFormulario({
      ...dadosDoFormulario,
      [campo]: valor,
    });
  };

  const eventoSubmit = (e) => {
    e.preventDefault();
    onSubmit(dadosDoFormulario);
  };

  return (
    <form onSubmit={eventoSubmit}>
      {campos.map((campo) => (
        <div key={campo.nome} className='divForm'>
          <label className='largura'>{campo.label}</label>
          <input
            type={campo.tipo}
            value={dadosDoFormulario[campo.nome] || ''}
            onChange={(e) => eventoChange(campo.nome, e.target.value)}
          />
        </div>
      ))}
      <button  type="submit">Salvar</button>
    </form>
  );
};

export default Formulario;
