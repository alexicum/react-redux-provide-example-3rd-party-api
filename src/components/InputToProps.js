import React, { PropTypes } from 'react';

const InputToProps = ({ inputName, inputValue, setInputValue, children }) => (
  <div>
    <input
      type="text"
      name={inputName}
      onInput={event => setInputValue(event.target.value)}
    />

    {React.Children.map( // from https://stackoverflow.com/questions/32370994
      children, child => React.cloneElement(child, { [inputName]: inputValue })
    )}
  </div>
);

InputToProps.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  children: PropTypes.any
};

export default InputToProps;
