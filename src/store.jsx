import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react"

export const PokemonContext = createContext()
PokemonContext.displayName = "PokemonContext"
export const usePokemonContext = () => useContext(PokemonContext)

const usePokemonData = () => {
  const [{ pokemon, search }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setSearch":
          return { ...state, search: action.payload }
        case "setPokemon":
          return { ...state, pokemon: action.payload }

        default:
          break
      }
    },
    {
      pokemon: [],
      search: "",
    }
  )

  // const [pokemon, setPokemon] = useState([])
  // const [search, setSearch] = useState("")

  const setPokemonSearch = useCallback((searchVal) => {
    dispatch({
      type: "setSearch",
      payload: searchVal,
    })
  }, [])

  useEffect(() => {
    fetch("../public/pokemon.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "setPokemon",
          payload: data,
        })
      )
  }, [])

  const filteredPokemon = pokemon.filter((d) => {
    console.log("filteredPokemon", d.name)
    return d.name.toLowerCase().includes(search)
  })

  return { pokemon: filteredPokemon, search, setPokemonSearch }
}
export const PokemonProvider = ({ children }) => (
  <PokemonContext.Provider value={usePokemonData()}>
    {children}
  </PokemonContext.Provider>
)
