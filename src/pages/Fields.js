import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FormContext } from '../context/form/formContext';

export const Fields = () => {
  const { form } = useContext(FormContext);

  if (form && !form.length) {
    return <Redirect to="/"/>;
  }

  return (
    <>
      <h1>Form field values</h1>
      {form && !!form.length && form.map(field => (
        <div key={field.label}>
          {field.label}: {field.value}
        </div>
      ))}
    </>
  );
};
