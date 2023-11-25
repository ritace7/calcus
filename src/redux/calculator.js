import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState:{
    expression: '',
    value: '0'
  },
  
  reducers: {
    clearValue: (state) =>{
        state.value = '0'
    },
    updateValue: (state, action) => {
      state.value = action.payload
    },
    appendToValue: (state, action) => {
      state.value += action.payload
    },
    clearExpression: (state) =>{
      state.expression = ''
    },
    updateExpression: (state, action) => {
      state.expression = action.payload
    },
    appendToExpression: (state, action) => {
      state.expression += action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateValue, clearValue ,appendToValue, clearExpression, updateExpression, appendToExpression} = calculatorSlice.actions;

export default calculatorSlice.reducer;