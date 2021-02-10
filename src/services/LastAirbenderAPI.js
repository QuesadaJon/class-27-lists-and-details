export const getCharacters = () => {
  return fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=20'
  )
    .then(res => res.json())
    .then(json => json);
};

export const getCharacterById = id => {
  return fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  )
    .then(res => res.json())
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.photoUrl,
      weapon: json.weapon,
      profession: json.profession,
      affiliation: json.affiliation
    }));
};
