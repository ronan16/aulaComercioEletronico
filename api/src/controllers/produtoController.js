// produtoController.js
const ProdutoModel = require('../models/produtoModel');

const salvarProduto = (req, res) => {
  const { nome, preco, qtd } = req.body;

  // Chame o método salvarProduto do modelo
  ProdutoModel.salvarProduto(nome, preco, qtd, (err, resultado) => {
    if (err) {
      console.error('Erro ao salvar o produto:', err);
      return res.status(500).json({ error: 'Erro ao salvar o produto' });
    }
    res.status(200).json({ message: 'Produto salvo com sucesso', resultado });
  });
};


const atualizarProduto = (req, res) => {
  const { id, nome, preco, qtd } = req.body;

  ProdutoModel.atualizarProduto(id, nome, preco, qtd, (err, resultado) => {
    if (err) {
      console.error('Erro ao atualizar o produto:', err);
      return res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
    res.status(200).json({ message: 'Produto atualizado com sucesso', resultado });
  });
};
const excluirProduto = (req, res) => {
  const { id } = req.params;

  ProdutoModel.excluirProduto(id, (err, resultado) => {
    if (err) {
      console.error('Erro ao excluir o produto:', err);
      return res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
    res.status(200).json({ message: 'Produto excluído com sucesso', resultado });
  });
};

const listarProdutos = (req, res) => {
  ProdutoModel.listarProdutos((err, resultados) => {
    if (err) {
      console.error('Erro ao listar os produtos:', err);
      return res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
    res.status(200).json(resultados);
  });
};

module.exports = { salvarProduto, atualizarProduto, excluirProduto, listarProdutos };

