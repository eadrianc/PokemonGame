import React from 'react';

import PokemonList from '../pokemon/PokemonList';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <PokemonList />
                </div>
            </div>

        );
    }
}