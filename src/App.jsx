import { PokemonProvider, usePokemonContext } from "./store"

const SearchPokemon = () => {
  const { search, setPokemonSearch } = usePokemonContext()
  return (
    <input
      type="text"
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search Pokemon"
      value={search}
      onChange={(e) => setPokemonSearch(e.target.value)}
    />
  )
}

const PokemonList = () => {
  const { pokemon } = usePokemonContext()
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
        <li
          key={p.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  return (
    <>
      <PokemonProvider>
        <SearchPokemon />
        <PokemonList />
      </PokemonProvider>
    </>
  )
}

export default App
