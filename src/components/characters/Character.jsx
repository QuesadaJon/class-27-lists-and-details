import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, affiliation, photoUrl }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <img src={photoUrl}/>
    <p>{affiliation}</p>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
