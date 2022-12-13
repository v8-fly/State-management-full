import { useEffect, useState } from "react"

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
  console.log("PokemonList")
  return (
    <ul>
      {pokemon.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const { pokemon } = usePokemonData()
  return <PokemonList pokemon={pokemon}></PokemonList>
}

export default App
