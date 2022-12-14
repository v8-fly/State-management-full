import { createContext, useState, useEffect, useContext } from "react"

export const PokemonContext = createContext()
PokemonContext.displayName = "PokemonContext"
export const usePokemonContext = () => useContext(PokemonContext)

const usePokemonData = () => {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("../public/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [])

  return { pokemon, search, setSearch }
}
export const PokemonProvider = ({ children }) => (
  <PokemonContext.Provider value={usePokemonData()}>
    {children}
  </PokemonContext.Provider>
)
