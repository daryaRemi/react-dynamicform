import React from 'react';

export const Form = ({ children, form, readOnly = false, changeForm }) => {
  if (form && !form.length) {
    return;
  }

  return (
    <div className="form">
      {form.map(item => (
        <React.Fragment key={item.id}>
          {item.label === 'Text Field' && (
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">{item.label}</label>
              <input type="text"
                     className="form-control"
                     placeholder="Enter text..."
                     value={item.value}
                     readOnly={readOnly}
                     name={item.label}
                     onChange={(e) => changeForm(e.target)}
              />
            </div>
          )}
          {item.label === 'Text Area' && (
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">{item.label}</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name={item.label}
                value={item.value}
                readOnly={readOnly}
                onChange={(e) => changeForm(e.target)}
              ></textarea>
            </div>
          )}
          {item.label === 'Date/Time' && (
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">{item.label}</label>
              <input type="datetime-local"
                     className="form-control"
                     placeholder="Enter date and time..."
                     value={item.value}
                     name={item.label}
                     readOnly={readOnly}
                     onChange={(e) => changeForm(e.target)}
              />
            </div>
          )}
        </React.Fragment>
      ))}
      {children}
    </div>
  );
};

