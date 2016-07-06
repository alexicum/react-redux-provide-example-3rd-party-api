import React, { PropTypes } from 'react';
import * as components from './index';

const { InputToProps, UserPosts } = components;

const App = () => (
  <div>
    <b>Enter a user ID (number):</b>

    <InputToProps inputName="userId">
      <UserPosts />
    </InputToProps>
  </div>
);

export default App;
export { components };
