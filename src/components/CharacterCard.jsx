function CharacterCard({ character }) {
  return (
    <div key={character.id}>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterCard;
