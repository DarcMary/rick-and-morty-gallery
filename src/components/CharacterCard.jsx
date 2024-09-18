import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

function CharacterCard({ character }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <div>
      <h3>{character.name}</h3>
      <div onClick={() => setFavorite(!favorite)}>
        {favorite ? <FaRegStar /> : <FaStar />}
      </div>
      <p>
        {character.status} - {character.species}
      </p>
      <p>Gender: {character.gender}</p>
      <p>{character.origin.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;
