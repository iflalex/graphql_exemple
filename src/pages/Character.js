import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';
import './Character.css';

const Character = () => {

  const {id} = useParams()

  const {data, loading, error} = useCharacter(id);

  if (loading) return <div>Spinner...</div>;

  if (error) return <p>Error fetch data</p>

  console.log(data)
  return <div className='Character'>
    <img src={data.character.image} alt={data.character.name} width={400} height={400} />
    <div className='Character-content'>
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div className='Character-episode'>
        {data.character.episode.map((episode,index) => {
          return <div key={`episode_${index}`}>
            {episode.name} - <b>{episode.episode}</b>
          </div>
        })}
      </div>
    </div>
  </div>;
};

export default Character;