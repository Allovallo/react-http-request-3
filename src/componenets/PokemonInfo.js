import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log('Pokemon`s name was changed!!!');

      fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(response => response.json())
        .then(pokemon => this.setState({ pokemon: pokemon }));
    }
  }

  render() {
    return (
      <div>
        <h1>PokemonInfo</h1>
        <p>{this.state.pokemon && <div>{this.state.pokemon.name}</div>}</p>
      </div>
    );
  }
}
