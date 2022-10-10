import './Filter.module.css';
import { useSearchContext } from '../SearchProvider';

const Filter = () => {
  const { setSearch } = useSearchContext();

  return (
    <input
      type="text"
      name="filter"
      onChange={event => setSearch(event.target.value)}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
