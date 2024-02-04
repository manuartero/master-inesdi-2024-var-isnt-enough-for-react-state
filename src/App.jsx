import "./App.css";
import data from "./data.json";

export function App() {
  let currentPokemon = data[1];
  return (
    <main>
      <Pokedex
        pkmns={data}
        onClick={(id) => {
          console.log(id);
          currentPokemon = data.find((pkmn) => pkmn.id === id);
        }}
      />
      <Detail pkmn={currentPokemon} />
    </main>
  );
}

function Pokedex({ pkmns, onClick }) {
  return (
    <div className="pokedex">
      {pkmns.map((pkmn) => (
        <PokemonCard
          key={pkmn.id}
          id={pkmn.id}
          name={pkmn.name}
          img={pkmn.img}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

function PokemonCard({ id, name, img, onClick }) {
  return (
    <div className="pokemon-card" onClick={() => onClick(id)}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

function Detail({ pkmn }) {
  return (
    <article className="detail">
      <h1>{pkmn.name}</h1>
      <img src={pkmn.img} alt={pkmn.name} />
      {pkmn.types.map((type, i) => (
        <p key={i}>
          <strong>Type:</strong> {type}
        </p>
      ))}
    </article>
  );
}
