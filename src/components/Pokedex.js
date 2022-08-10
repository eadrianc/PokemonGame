import React from "react";



export default class Pokedex extends React.Component {
    constructor() {
        super();
    
        this.state = { user: {} };
    }
    
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/3/")
        .then(response => response.json())
        .then(user => this.setState({user: user}))
    }
    
    render() {
        const user = this.state.user;
    
        return <h1>hello, {user.name}</h1>;
    }
    
    }