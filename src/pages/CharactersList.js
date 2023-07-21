import {useCharacters} from '../hooks/useCharacters';
import {Link} from 'react-router-dom';
import './CharactersList.css';



const CharactersList = () => {
  
  const { error, loading, data } = useCharacters();

  if (loading) return <div>spinner...</div>

  if (error) return `Error! ${error}`;

  return (
    <div className="CharactersList">

      {data.characters.results.map( (character, index) =>{
        return <Link to={`/${character.id}`} key={index}>
          <img src={character.image} alt={character.name}/>
          <h2>{character.name}</h2>
        </Link>
      })}

    </div>
  );
};

export default CharactersList;