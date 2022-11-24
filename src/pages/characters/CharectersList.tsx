import "./CharacterList.css";
import { useCharacters } from "../../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharectersList = () => {
  const { data, error, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>sth went wrong!</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((charcter: any) => {
        const { name, image, id } = charcter;
        return (
          <Link key={id} to={`/${id}`}>
            <div>
              <img src={image} alt={name} />
              <h2>{name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CharectersList;
