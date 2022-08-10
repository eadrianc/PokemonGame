import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';


export default class PokemonList extends React.Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/', 
        pokemon: null
    };
    
      async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }
    
    render() {
        return (
          <React.Fragment>
            {this.state.pokemon ? (
                <div className='row'>
                    {this.state.pokemon.map(pokemon => (
                        <PokemonCard />
                    ))}
                </div>
            ) : (  
                <h1> Carregando Pokemon</h1>
            )}
          </React.Fragment>
        );
    }
}