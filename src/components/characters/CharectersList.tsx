import "./CharacterList.css";
import { useCharacters } from "../../hooks/useCharacters";

const CharectersList = () => {
  const { data, error, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>sth went wrong!</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((charcter: any) => {
        const { name, image, id } = charcter;
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharectersList;
