import React, { useState, useEffect } from 'react';
import './CadastroProdutos.css';
import Formulario from '../../components/Formulario';
import api from '../../services/api';
import Tabela from '../../Components/Tabela';

const CadastroProduto = () => {
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState([]);


  const listaForm = [
    { nome: 'nome', label: 'Nome', tipo: 'text' },
    { nome: 'preco', label: 'Preço unitário', tipo: 'number' },
    { nome: 'qtd', label: 'Quantidade', tipo: 'number' },
  ];

  const colunasProdutos = ['id', 'nome', 'preco', 'qtd'];


  
  const enviarFormulario = async (dadosDoFormulario) => {
    try {
      await api.gravarProduto(dadosDoFormulario)

      setMensagem('Produto salvo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar o produto:', error.message);
      setMensagem('Erro ao salvar o produto');
    }
  };

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await api.getProdutos();
        setProdutos(dados);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error.message);
      }
    };

    carregarProdutos();
  }, []);

  const excluirProduto = async (id) => {
    try {
      await api.excluirProduto(id);
      const novaLista = produtos.filter((produto) => produto.id !== id);
      setProdutos(novaLista);
    } catch (error) {
      console.error('Erro ao excluir o produto:', error.message);
    }
  };

  return (
    <div className="classeCSS">
      <h1>Cadastro de Produto</h1>
      <Formulario campos={listaForm} onSubmit={enviarFormulario} />
      {mensagem && <p>{mensagem}</p>}
   
    <h2>Produtos Cadastrados</h2>
      <Tabela
        dados={produtos}
        onExcluirItem={excluirProduto}
        onEditarItem={(id) => console.log(`Editar produto com ID ${id}`)}
        colunas={colunasProdutos}
      />
    </div>
  );
};

export default CadastroProduto;
