
import { async } from 'q';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {db} from '../config/firebase';



const parseCategory = () => { 
    const parsedCategory = []
    //parse through all documents 
    //store category 
    //if category don't exit add to parsed category 
    parseData();

    return parsedCategory; 
}

const parseData = async (categoryContainer) =>{
    try {
        const docRef = await getDocs(collection(db, "SpendingItems"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id })); 
            categoryContainer.push(newData);      
            console.log(amounts, newData);
        })
        console.log("Document read with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
} 

export default parseCategory; 