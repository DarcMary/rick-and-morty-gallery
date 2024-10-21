import { FaStar, FaRegStar } from "react-icons/fa";

function CharacterCard({ character, handleFavorite }) {
  return (
    <div className="bg-gray-700 rounded-lg flex m-4 w-custom-card h-56 shadow-lg">
      <div className="flex w-full">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-l-lg object-cover w-auto h-full"
        />
        <div className="p-4 w-full">
          <div className="flex justify-between">
            <h3 className="text-2xl font-black text-white">{character.name}</h3>
            <div onClick={handleFavorite} className="cursor-pointer">
              {character.isFavorite ? (
                <FaStar className="text-white" />
              ) : (
                <FaRegStar className="text-gray-400" />
              )}
            </div>
          </div>
          <div className="text-white space-y-4">
            <p>
              {character.status} - {character.species}
            </p>
            <p>Gender: {character.gender}</p>
            <p>{character.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
