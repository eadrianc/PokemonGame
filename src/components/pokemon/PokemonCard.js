import React from 'react';
import { Link } from 'react-router-dom';


import styled from 'styled-components';



const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active {
    text-decoration: none;
}
`;



export default class PokemonCard extends React.Component {
    state={
        name: '',
        image: '',
        pokemonIndex: ''
    };

    componentDidMount() {
        const {name, url} = this.props
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
      

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
            
        });
    }

    render() {
        return (
            <div className=''>
                <StyledLink to={`${this.state.pokemonIndex}`}>
                    
                    
                    <div className='card-body mx-auto'>
                        <h6 className='card-title'>{this.state.name
                        .toLowerCase()
                        .split('')
                        .map(
                            letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                            )
                            .join('')}
                            </h6>
                    </div>
               </StyledLink>
            </div>

        );
    }
}