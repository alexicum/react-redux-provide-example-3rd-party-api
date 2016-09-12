import createLogger from 'redux-logger';

const apiUrl = 'http://jsonplaceholder.typicode.com/posts';

const SET_POSTS = 'SET_POSTS';

const toParams = obj => Object.keys(obj)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  .join('&');

export default {
  actions: {
    setPosts: posts => {
      console.log('setPosts action');
      return { type: SET_POSTS, posts: posts }; 
    }
  },

  reducers: {
    userId: (state = '') => state,
    posts: (state = [], action) => {
      switch(action.type) {
        // case SET_POSTS:
        //   return {...state, posts: action.posts};
        default:          
          return state;
      }        
    }
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
  },
  middleware: [createLogger()]  
};
