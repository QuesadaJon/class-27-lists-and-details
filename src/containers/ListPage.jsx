import React, { Component } from 'react';
import { getCharacters } from '../services/LastAirbenderAPI';
import CharacterList from '../components/characters/CharacterList';

export default class ListPage extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    return (
      <CharacterList characters={characters} />
    );
  }
}
