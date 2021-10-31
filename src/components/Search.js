import React, { useContext, useState } from 'react';
import { FormContext } from '../context/form/formContext';

export const Search = () => {

  const [value, setValue] = useState('');

  const form = useContext(FormContext);

  const onSubmit = value => {
    form.search(value.trim());
  };
  return (
    <div className="form-group">
      <input type="text"
             className="form-control"
             placeholder="Search for a field by name..."
             value={value}
             onChange={event => {
               setValue(event.target.value);
               onSubmit(event.target.value);
             }}
        // onBlur={() => {
        //   setValue('');
        //   onSubmit('')
        // }}
      />
    </div>
  );
};
