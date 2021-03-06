import React, { useReducer } from 'react';
import { FormContext } from './formContext';
import { formReducer } from './formReducer';
import {
  ADD_FIELD,
  CHANGE_FIELD,
  SEARCH_FIELD
} from '../types';

export const FormState = ({ children }) => {
  const initialState = {
    fields: [
      'Text Field',
      'Text Area',
      'Date/Time'
    ],
    form: []
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const addField = type => {
    const form = [...state.form];
    form.push({
      id: Symbol('id').toString(),
      label: type,
      value: ''
    });
    console.log(type);
    dispatch({
      type: ADD_FIELD,
      payload: form
    });
  };

  const search = value => {
    const saveFields = [
      'Text Field',
      'Text Area',
      'Date/Time'
    ];
    const fields = [...saveFields];
    let res = fields.filter(it => it.toLowerCase().includes(value.toLowerCase()));

    dispatch({
      type: SEARCH_FIELD,
      payload: res
    });
  };

  const changeField = (name, value) => {
    console.log(name, value);
    const form = [...state.form];
    const field = form.find(it => it.label === name);
    field.value = value;

    dispatch({
      type: CHANGE_FIELD,
      payload: form
    });
  };

  const { form, fields } = state;

  return (
    <FormContext.Provider value={{
      search, addField, changeField,
      form, fields
    }}>
      {children}
    </FormContext.Provider>
  );
};
