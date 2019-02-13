export const Async = `
async componentDidMount() {
  const { data } = await axios.get(url);
  this.setState({ data });
}
`.trim()

export const Sync = `
componentDidMount() {
  axios.get(url).then((response) => {
    this.setState({ data: response.data });
  });
}
`
