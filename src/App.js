import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Fields } from './pages/Fields';
import { Edit } from './pages/Edit';
import { FormState } from './context/form/formState';

function App() {
  return (
    <FormState>
      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/fields" component={Fields}/>
            <Route path="/edit" component={Edit}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    </FormState>
  );
}

export default App;
