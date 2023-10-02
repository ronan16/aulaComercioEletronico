import React, { useState } from 'react';
import './Formulario.css';

export default function Formulario(props) {

    const { campos } = props
    const [dadosForm, setDadosForm] = useState({});

    const eventoChange = (e) => {
        const { name, value } = e.target;
        setDadosForm({ ...dadosForm, [name]: value })
    }

    const novoSubmit = (e) => {
        e.preventDefault();
        // Enviar os dados para o servidor usando fetch
        fetch('http://localhost:3000/api/produtos/salvar-produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosForm),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Aqui, você pode lidar com a resposta do servidor, como exibir uma mensagem de sucesso
            })
            .catch((error) => {
                console.error('Erro ao enviar dados para o servidor:', error);
                // Aqui, você pode lidar com erros de solicitação
            });
    };

    return (
        <form onSubmit={novoSubmit}>
            {campos.map((campo, index) => (
                <div key={index} className='divForm'>
                    <label className='largura' htmlFor={campo.nome}>{campo.label}:</label>
                    <input
                        type={campo.tipo}
                        id={campo.nome}
                        name={campo.nome}
                        value={dadosForm[campo.nome] || ''}
                        onChange={eventoChange}
                    />
                </div>
            ))
            }
            <button type="submit">Enviar</button>

        </form>
    )
}
