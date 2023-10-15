import { db } from '../config/firebase.js'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const CategoryData = (month) => {
    var data = [
        { name: "Shelter", val: 0, color: "#D27927" },
        { name: "Transportation", val: 0, color: "#2F7EC8" },
        { name: "Food", val: 0, color: "#2CD132" },
        { name: "Education", val: 0, color: "#D23737" },
        { name: "Recreation", val: 0, color: "#13D1AF" },
        { name: "Health", val: 0, color: "#D25892" },
        { name: "Miscellaneous", val: 0, color: "#4C4948" },
    ]

    const putData = async () => {
        const q = query(collection(db, "SpendingItems"), where("date", "==", month))
        console.log(q)
        const docs = await getDocs(q);
        console.log(docs)
        docs.forEach((doc) => {
            if(doc.data().category == "Shelter"){
                data[0].val += doc.data().cost
            }
            else if(doc.data().category == "Transportation"){
                data[1].val += doc.data().cost
            }
            else if(doc.data().category == "Food"){
                data[2].val += doc.data().cost
            }
            else if(doc.data().category == "Education"){
                data[3].val += doc.data().cost
            }
            else if(doc.data().category == "Recreation"){
                data[4].val += doc.data().cost
            }
            else if(doc.data().category == "Health"){
                data[5].val += doc.data().cost
            }
            else if(doc.data().category == "Miscellaneous"){
                data[6].val += doc.data().cost
            }
        }, []);
    }
    putData()

    return data
}