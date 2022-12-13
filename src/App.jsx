import { createContext, useContext, useEffect, useState } from "react"

const usePokemonData = () => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch("../public/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [])
  return { pokemon }
}

const PokemonList = () => {
  const { pokemon } = useContext(PokemonProvider)
  return (
    <ul>
      {pokemon.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  )
}

const PokemonProvider = createContext()

const App = () => {
  return (
    <PokemonProvider.Provider value={usePokemonData()}>
      <PokemonList />
    </PokemonProvider.Provider>
  )
}

export default App
