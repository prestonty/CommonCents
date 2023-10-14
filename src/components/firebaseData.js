import React, { Component, useState, useEffect } from "react"; 
import { collection, getDocs } from "firebase/firestore";
import {db} from '../config/firebase';

export default function FirebaseData () {
const [amounts, setAmount] = useState([]);
 
const fetchPost = async () => {
   
    await getDocs(collection(db, "Spending"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setAmount(newData);                
            console.log(amounts, newData);
        })
   
}

useEffect(()=>{
    fetchPost();
}, [])

//display firebase data 

    return (
        <div class="firebaseData">
            <h1>here is some test data</h1>
            {
                amounts?.map((amount,i)=>(
                    <p key={i}>
                        {amount.amount}
                    </p>
                ))
            }
        </div> 
  
    );
}