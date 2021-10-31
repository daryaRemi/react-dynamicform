import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form } from '../components/Form';
import { FormContext } from '../context/form/formContext';

export const Edit = () => {
  const { form, changeField } = useContext(FormContext);

  if (form && !form.length) {
    return <Redirect to="/"/>;
  }

  const changeForm = (target) => {
    const { name, value } = target;
    changeField(name, value);
  };

  return (
    <>
      <h1>Edit form</h1>
      {form && !!form.length && (
        <Form form={form} changeForm={(target) => changeForm(target)}>
          <Link className="btn btn--link" to="/fields">Show form field values</Link>
        </Form>
      )}
    </>
  );
};