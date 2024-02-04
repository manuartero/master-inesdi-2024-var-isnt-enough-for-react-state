# Example: Var isn't enough for React State.

## Master INESDI 2024 

The need of `React.useState()`

```jsx
export function Pokedex() {
  let currentPokemon = data[1];
  return (
    <main>
      <PokemonList
        pkmns={data}
        onClick={(id) => {
          console.log(id);
          currentPokemon = data.find((pkmn) => pkmn.id === id);
        }}
      />
      <PokemonDetail pkmn={currentPokemon} />
    </main>
  );
}
```

![screenshot](screenshot.png)