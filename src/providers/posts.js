const apiUrl = 'http://jsonplaceholder.typicode.com/posts';

const toParams = obj => Object.keys(obj)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  .join('&');

export default {
  reducers: {
    userId: (state = '') => state
  },

  replication: {
    replicator: {
      handleQuery(query, options, setResult) {
        const queryUrl = `${apiUrl}?${toParams({ ...query, ...options })}`;

        window.fetch(queryUrl, { mode: 'cors' })  // assuming modern browser :P
          .then(response => response.json())
          .then(result => setResult(result))
          .catch(error => setResult(error));
      }
    }
  }
};
