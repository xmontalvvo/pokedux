import { Col } from 'antd'
import Searcher from './components/Searcher';
import logo from './statics/logo.svg'
import './App.css';
import PokemonList from './components/PokemonList'

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        
        <img src={logo} alt="Pokedux" />
        
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
