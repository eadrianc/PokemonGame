import React from "react";
import axios from "axios";

export default class Pokemon extends React.Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types : [],
        description : '',
        stats: {
            hp: " ",
            attack: " ",
            defense:" ",
            speed: " ",
            specialAttack: " ",
            specialDefense: " ",

        },
        height: " ",
        weight: " ",
        eggGroup: " ", 
        abilities: " ",
        genderRatioMale: " ",
        genderRatioFemale: " ",
        evs: " ",
        hatchSteps: " "

    };

    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;

        //Urls for pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        //Get Pokemon Information. 
        const pokemonRes = await axios.get(pokemonUrl);

        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;

        let {hp, attack, defense, speed, specialAttack, specialDefense} = '';

        pokemonRes.data.stats.map(stat => {
            switch (stat.stat.name){
                case 'hp' :
                    hp = stat['base_stat'];
                    break;
                case 'attack' :
                    attack = stat['base_stat'];
                    break;
                case 'defense' :
                    defense = stat['base_stat'];
                    break;
                 case 'speed' :
                    speed = stat['base_stat'];
                    break;
                case 'special-attack' :
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense' :
                    specialDefense = stat['base_stat'];
                    break;
            }
        });
        // Convert Decimeters to feet..

        const height =
        Math.round((pokemonRes.data.height * 0.328084 + 0.0001) * 100) /100;

        //convertir para libras.
        const weight = 
        Math.round((pokemonRes.data.weight * 0.220462 + 0.0001) *100) /100;

        const types = pokemonRes.data.types.map(type => type.type.name);

        const abilities = pokemonRes.data.abilities.map(ability => {
            return ability.ability.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');
        });
        const evs = pokemonRes.data.stats.filter (stat => {
            if (stat.effort > 0 ) {
                return true;
            }
            return false;
        })
        .map(stat => {
            return `${stat.effort} ${stat.stat.name}`.toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');
        })
        .join('');

        //get pokemon Description, Catch Rate, EggGroups, Gender Ration, Hatch Steps
    }
    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
        </div>
        );
    }
}

