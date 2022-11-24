import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import "./Search.css";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: string!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>sth went wrong</div>;

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      <ul>
        {data.characters.results.map((character: any) => {
          const { name } = character.location;
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
