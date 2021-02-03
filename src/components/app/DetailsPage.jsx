import React, { Component } from 'react';
import { getCharacters } from '../../services/LastAirbenderAPI';

export default class DetailsPage extends Component {
  state = {
    character: []
  }

  componentDidMount() {
    getCharacters()
      .then(character => this.setState({ character }));
  }

  render() {
    const { character } = this.state;

    return (

    );
  }
}
