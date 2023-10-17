import React, { useEffect } from "react";
import usePokemons from "./hooks/usePokemons";

function App() {
  const { getPokemons } = usePokemons();

  useEffect(() => {
    (async () => {
      const pokemons = await getPokemons();
      console.log(pokemons);
    })();
  }, []);
  return <div>Hello, Pokemons!</div>;
}

export default App;
