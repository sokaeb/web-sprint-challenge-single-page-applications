import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
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
  special_instructions: '',
}

// 2. declaring initial state for form errors
const initialFormErrors = {
  name: '',
  size: '',
}

// 3. declaring inital state of pizzaform to be empty
const initialPizzaForm = []

// 4. declaring initial state of button to be disabled
const initialDisabled = true


const App = () => {

  const [pizzaForm, setPizzaForm] = useState(initialPizzaForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
