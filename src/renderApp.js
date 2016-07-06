import 'react-redux-provide/lib/install';
import React from 'react';
import { render } from 'react-dom';
import { reloadFunctions, reloadProviders } from 'react-redux-provide';
import App, { components } from './components/App';
import defaultProps from './defaultProps';

function renderApp(props, element = document.getElementById('root')) {
  return render(<App { ...props } />, element);
}

renderApp(defaultProps);

export default renderApp;

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    let oldFunctions = components;

    module.hot.accept('./components/App', () => {
      const newFunctions = require('./components/App').components;

      reloadFunctions(oldFunctions, newFunctions);
      oldFunctions = newFunctions;
    });

    module.hot.accept('./defaultProps', () => {
      reloadProviders(require('./defaultProps').default.providers);
    });
  }
}
