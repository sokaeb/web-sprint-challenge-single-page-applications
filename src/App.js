import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm';
import formSchema from './validation/formSchema';

// 1. declaring initial state for form values
const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    spinach: false,
  },
  instructions: '',
}

// 2. declaring initial state for form errors
const initialFormErrors = {
  name: '',
  size: '',
}

// 3. declaring inital state of pizzaform to be empty
const initialPizzaOrders = []

// 4. declaring initial state of button to be disabled
const initialDisabled = true


const App = () => {

  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postPizza = pizza => {
    axios.post('https://reqres.in/api/users', pizza)
    .then(res => {
      // setPizzaOrders(pizzaOrders.concat(res.data))
      console.log(res.data)
    })
    .catch(err => {
      debugger
      console.log(err.response)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  // Form Actions
  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(tops => formValues.toppings[tops]),
      instructions: formValues.instructions.trim(),
    } 
    postPizza(pizza)
  }

useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid);
  })
}, [formValues])

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/PizzaForm'>CREATE</Link>
        </div>
      </nav>
      
      <p>Create Your Own Pizza</p>
     
    <Switch>
      <Route path='/PizzaForm'>
        <PizzaForm
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>

      <Route path='/'>
        <Home />
      </Route>

    </Switch>
    </>
  );
};

export default App;
