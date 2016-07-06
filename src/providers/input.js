const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export default {
  key: ({ props }) => `inputName=${props.inputName}`,

  actions: {
    setInputValue: inputValue => ({ type: SET_INPUT_VALUE, inputValue })
  },

  reducers: {
    inputValue: (state = '', { type, inputValue }) => type === SET_INPUT_VALUE
      ? inputValue
      : state
  }
};
