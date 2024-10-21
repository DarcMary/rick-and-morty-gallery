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
    <div
      className={`min-h-screen p-4 ${
        searchTerm || showFavorites ? "bg-gray-900" : "bg-gray-900"
      }`}
    >
      <div className="flex justify-center gap-12">
        <input
          className=" bg-gray-700 text-white p-2 rounded w-80 mb-4 placeholder-white"
          type="text"
          placeholder="Search for characters here"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) =>
            (e.target.placeholder = searchTerm
              ? ""
              : "Search for characters here")
          }
        />
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="bg-gray-700 text-white px-4 py-2 rounded mb-4"
        >
          {showFavorites ? "Show All Characters" : "Show Favorites"}
        </button>
      </div>
      <h1 className="text-sm sm:text-xl md:text-2xl lg:text-4xl text-white font-bold flex justify-center">
        {showFavorites ? "Favorite characters" : "Characters"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {(showFavorites ? favoriteCharacters : filteredCharacters).map(
          (character) => (
            <div key={character.id}>
              <CharacterCard
                key={character.id}
                character={character}
                handleFavorite={() => handleFavorite(character.id)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CharactersList;
