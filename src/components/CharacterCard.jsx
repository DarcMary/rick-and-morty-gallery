import { FaStar, FaRegStar } from "react-icons/fa";

function CharacterCard({ character, handleFavorite }) {
  return (
    <div>
      <h3>{character.name}</h3>
      <div onClick={handleFavorite}>
        {character.isFavorite ? <FaStar /> : <FaRegStar />}
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
