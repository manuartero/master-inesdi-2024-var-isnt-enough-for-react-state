# Example: Var isn't enough for React State.

## Master INESDI 2024 ![icon](public/bulbasur.png)

The need of `React.useState()`

![screenshot](screenshot.png)

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

