import React, { useState, useEffect } from 'react';
import UseCategory from '../utils/useCategory';
import { async } from 'q';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {db} from '../config/firebase';


const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('');
  const [formData, setFormData] = useState(null); 
  const [category, getcategory,updateItem] = UseCategory("pasta"); 
  
  const handleSubmit = (e) => {

    e.preventDefault();
    

    const thisFormData = {
        name,
        date,
        cost: parseFloat(cost),
        category
    };

    setFormData(thisFormData); 
  
    const jsonObject = JSON.stringify(formData); 
    console.log(jsonObject);
    
    setName('');
    setDate('');
    setCost('');
  };

  const handleChange = (e) => {
    setName(e.target.value)
    updateItem(e.target.value)
    getcategory()
  }; 

  useEffect(() => {
    console.log("form data changed")
    console.log(formData)
    storeData(formData)
  }, [formData])

const storeData = async (data) =>{
    try {
        const docRef = await addDoc(collection(db, "SpendingItems"), {
            date: data.date,
            name: data.name,
            cost: data.cost,
            category: data.category, 
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleChange}
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