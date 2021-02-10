import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/LastAirbenderAPI';

const DetailsPage = () => {
  const [character, setCharacters] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id)
      .then((character) => setCharacters(character));
  }, []);

  const { name, image, weapon, profession, affiliation } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image}/>
      <figcaption>
        <p>Weapon: {weapon}</p>
        <p>Profession: {profession}</p>
        <p>Known Affiliations: {affiliation}</p>
      </figcaption>
    </div>
  );
};

export default DetailsPage;
