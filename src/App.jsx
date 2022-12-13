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

const PokemonList = ({ pokemon }) => {
  const theme = useContext(ThemeProvider)
  console.log("Context", theme)
  return (
    <ul>
      {pokemon.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  )
}

const ThemeProvider = createContext("")

const App = () => {
  const { pokemon } = usePokemonData()
  return (
    <ThemeProvider.Provider value="light">
      <PokemonList pokemon={pokemon}></PokemonList>
    </ThemeProvider.Provider>
  )
}

export default App
