export const Initial = `
const [data, setData] = useState({});

useEffect(() => {
  axios.get(url).then(({ data }) => {
    setData({ data });
  });
}, []);
`

export const HooksHandleChange = `
useEffect(() => {
  query && query.length >= 1
    ? setResults(getInfo(query)) : setResults([]);
}, [query]);
`

export const HookSearch = `
export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    setSearchable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  );
}
`
