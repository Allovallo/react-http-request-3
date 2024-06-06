import React, { Component } from 'react';
import PokemonForm from 'componenets/PokemonForm';

export default class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm />
      </div>
    );
  }
}
