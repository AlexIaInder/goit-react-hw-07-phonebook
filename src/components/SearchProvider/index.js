const { createContext, useState, useContext } = require('react');

const SearchContext = createContext({});

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
