import "./CharacterList.css";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharectersList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTER);

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
