import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  async function getCharacters() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const results = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(results);
  }, [searchTerm, characters]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for characters here"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <h1>Characters</h1>
      <ul>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharactersList;
