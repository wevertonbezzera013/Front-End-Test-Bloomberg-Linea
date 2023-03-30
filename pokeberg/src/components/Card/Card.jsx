import { useEffect, useState } from "react";
import "./Card.scss";

const Card = () => {
  const [pokemon, setPokemon] = useState({});
  const [count, setCount] = useState(0);

  const removeGames = ["red", "blue"];

  /* Fetching the API */

  useEffect(() => {
    FetchAPI();
  });

  const FetchAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/charmander")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        //console.log(data);

        /* Selecting the games I want to remove */
        const removeGames = ["red", "blue"];

        /* Filtering and removing the games */
        const filteringGames =
          pokemon.game_indices &&
          pokemon.game_indices
            .filter((game) => !removeGames.includes(game.version.name))
            .map((game) => game.version.name);
        //console.log("filtering:", filteringGames);

        setCount(filteringGames.length);

        //console.log(filteringGames);
      });
  };

  //console.log(pokemon.name);

  //console.log(pokemon.moves);

  return (
    <>
      <div className="container">
        <div className="pokemon-name">{pokemon.name}</div>

        {/* This code checks if there's a sprite and returns it */}
        <img
          className="pokemon-img"
          src={pokemon.sprites ? pokemon.sprites.front_default : ""}
          alt={pokemon.name}
        />

        <div className="detail-lists">
          <details>
            <summary>POKEMON MOVEMENTS</summary>
            <ul>
              {/* This code returns the move array */}
              {pokemon.moves &&
                pokemon.moves
                  .map((movement) => movement.move.name)
                  .sort()
                  .map((moveName, index) => (
                    <li className="content" alt={moveName} key={index}>
                      {moveName}
                    </li>
                  ))}
            </ul>
          </details>

          <details>
            <summary>LIST OF GAMES</summary>
            <ul>
              {pokemon.game_indices &&
                pokemon.game_indices
                  .filter((game) => !removeGames.includes(game.version.name))
                  .map((game) => (
                    <li
                      className="content"
                      alt={game.version.name}
                      key={game.version.name}
                    >
                      {game.version.name}
                    </li>
                  ))}
            </ul>
          </details>
        </div>

        <div className="game-count">
          Amount of games that this pokemon appears: {count}
        </div>
      </div>
    </>
  );
};

export { Card };
