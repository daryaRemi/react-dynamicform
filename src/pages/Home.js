import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { FormContext } from '../context/form/formContext';
import { Form } from '../components/Form';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { fields, addField, deleteField, form } = useContext(FormContext);

  return (
    <>
      <h1>Create form</h1>
      <Search/>

      <div>
        {
          fields.map(field => (
              <p
                key={field}
                className={form.map(it => it.label).includes(field) ? 'field active' : 'field'}
                onClick={() => {
                  if (form.find(it => it.label === field)) {
                    return deleteField(field);
                  }
                  addField(field);
                }}
              >
                {field}
              </p>
            )
          )
        }
      </div>
      {form && !!form.length && (
        <Form form={form} readOnly>
          <Link className="btn btn--link" to="/edit">Go to edit</Link>
        </Form>
      )}
    </>
  );
};