export const FunctionWithState = `
  const useAxios = (url, initialState = {}) => {
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    return { data, error, loading }
  }
`;

export const GetData = `
const useAxios = (url, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return { data, error, loading }
}
`;

export const RunOnLoad = `
const useAxios = (url, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading }
}
`;

export const WithCustomHook = `
import { useAxios } from './lib/CustomHooks

export default function HooksSearch() {
  const { data, error, loading } = useAxios('https://api.punkapi.com/v2/beers');
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  setSearchable(data);

  const getInfo = wordToMatch => {
    return searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex);
    });
  };

  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(query)) : setResults([]);
  }, [query]);

  return (
    {loading ? <div>Loading...</div> :
      <div>
        <Form>
          <SearchIcon width="16" height="16" />
          <Input
            type="text"
            placeholder="Search for..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </Form>
        <Suggestions results={results} />
      </div>
    }
  );
}`;