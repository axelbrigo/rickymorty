import React, {useState, useEffect}  from 'react';
import '../styles/style.css'

const Characters = () => {
        const [characters, setCharacters] = useState([]);


        useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
        }, [])
    
    
      return(
        <div className='Characters'>
            {characters.map(character => ( 
                   <div className='cards'>
                   <h2> {character.name} </h2>
                   <h3>{character.species} </h3>
                   <h5>{character.status} </h5>
                   <img src={character.image} alt='imagen'></img>
                   </div>
                   
            ))}
         
        </div>


    );
}


export default Characters;