import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  async function getCharacters() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    const updatedCharacters = data.results.map((character) => ({
      ...character,
      isFavorite: false,
    }));
    setCharacters(updatedCharacters);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  function handleFavorite(characterId) {
    const updatedCharacters = characters.map((character) => {
      if (character.id === characterId) {
        return {
          ...character,
          isFavorite: !character.isFavorite,
        };
      }
      return character;
    });
    setCharacters(updatedCharacters);
  }

  useEffect(() => {
    const results = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(results);
  }, [searchTerm, characters]);

  const favoriteCharacters = characters.filter(
    (character) => character.isFavorite
  );

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
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? "Show All Characters" : "Show Favorites"}
      </button>
      <h1>{showFavorites ? "Favorite Characters" : "Characters"}</h1>
      <ul>
        {(showFavorites ? favoriteCharacters : filteredCharacters).map(
          (character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleFavorite={() => handleFavorite(character.id)}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default CharactersList;
