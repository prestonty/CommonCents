import React, { useState, useEffect } from 'react';
import UseCategory from '../utils/useCategory';
import { async } from 'q';


const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('');
  // const [category, getcategory] = UseCategory("pasta"); 

  const handleSubmit = (e) => {

    e.preventDefault();
    // getcategory(); 
    
    const formData = {
        name,
        date,
        cost: parseFloat(cost),
      };
  
    const jsonObject = JSON.stringify(formData); 
    console.log(jsonObject);
   

    setName('');
    setDate('');
    setCost('');
  };

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }; 


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Cost:
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;