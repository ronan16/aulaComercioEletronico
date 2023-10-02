import './App.css'
import Formulario from './Components/Formulario';

function App() {

  const listaForm = [
    {nome: "nome", label: 'Nome', tipo: 'text'},
    {nome: "preco", label: 'Preço unitário', tipo: 'number'},
    {nome: "qtd", label: 'Quantidade', tipo: 'number'},
  ]
  return (
    <>
      <Formulario campos={listaForm} />
    </>
  )
}

export default App
