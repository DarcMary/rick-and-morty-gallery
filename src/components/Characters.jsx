import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function Characters() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default Characters;
