import { useState, useEffect } from "react";

function Characters () {
    const [characters, setCharacters] = useState([]); 

    async function getCharacters(){
        const url = "https://rickandmortyapi.com/api/character"
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
        console.log(data.results);
    }
    
    useEffect(() => {
        getCharacters();
    }, []);

  return(
    <div>
        <h1>Characters</h1>
        <ul>
            {characters.map(characters =>(
                <div key={characters.id}>
                <p>{characters.name}</p>
                <img src={characters.image} alt={characters.name} />
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Characters;
