import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = { pokemonName: '' };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          text="text"
          name="pokemon"
          value={this.state.pokemon}
          onChange={this.handleNameChange}
        ></input>
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          FIND!
        </button>
      </form>
    );
  }
}
