export const getCharacters = () => {
  return fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=20'
  )
    .then(res => res.json())
    .then(json => json);
};
