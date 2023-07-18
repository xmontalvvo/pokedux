import { useEffect } from 'react';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './api/index'
import { setPokemons } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state => state.pokemons)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonsDetailed))
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


export default App;
