import React from 'react';

export default function PizzaForm(props){
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
     } = props

     const onSubmit = evt => {
         evt.preventDefault()
         submit()
     }

     const onCheckboxChange = evt => {
         const { name, checked } = evt.target
         checkboxChange(name, checked)
     }

     const onInputChange = evt => {
         const { name, value } = evt.target
         inputChange(name, value)
     }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div><h2>Create Your Pizza</h2></div>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
            
            <div className='form inputs'>
                <label>Name&nbsp;
                    <input 
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        />
                    </label>

                <label>Pizza Size&nbsp; 
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select a Size -</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>

                <label>Pepperoni
                    <input
                        name='pepperoni'
                        type='checkbox'
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Sausage
                    <input
                        name='sausage'
                        type='checkbox'
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Mushrooms
                    <input
                        name='mushrooms'
                        type='checkbox'
                        checked={values.toppings.mushrooms}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Spinach
                    <input
                        name='spinach'
                        type='checkbox'
                        checked={values.toppings.spinach}
                        onChange={onCheckboxChange}
                    />
                </label>

                <label>Special Instructions&nbsp;
                    <input 
                            value={values.instructions}
                            onChange={onInputChange}
                            name='instructions'
                            type='text'
                    />
                </label>
            </div>

             <button disabled={disabled}>SUBMIT</button>
        </form>
    )
}