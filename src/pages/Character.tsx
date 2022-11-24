import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (error) return <div>sth went wrong</div>;

  if (loading) return <div>Loading ...</div>;

  const { image, name, gender, episode } = data.character;

  return (
    <div className="Character">
      <img src={image} alt={name} width={750} height={750} />
      <div className="Character-content">
        <h1>{name}</h1>
        <p>{gender}</p>
        <div className="Character-episode">
          {episode.map((episodeArr: any, index: number) => {
            const { name, episode } = episodeArr;
            return (
              <div key={index}>
                {name} - <b>{episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
