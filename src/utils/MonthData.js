import { db } from '../config/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export const MonthData = () => {
    var data =  [{name: "May", val: 0, color: "#00715B" },
                { name: "Jun", val: 0, color: "#D9893A" },
                { name: "Jul", val: 0, color: "#D93A3A" },
                { name: "Aug", val: 0, color: "#D93A3A" },
                { name: "Sep", val: 0, color: "#D9893A" },
                { name: "Oct", val: 0, color: "#00715B" },]

    const putData = async () => {
        const items = await getDocs(collection(db, "SpendingItems"));
        items.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().date == 'May'){
            data[0].val += doc.data().cost
        }else if (doc.data().date == 'Jun'){
            data[1].val += doc.data().cost
        }else if (doc.data().date == 'Jul'){
            data[2].val += doc.data().cost
        }else if (doc.data().date == 'Aug'){
            data[3].val += doc.data().cost
        }else if (doc.data().date == 'Sep'){
            data[4].val += doc.data().cost
        }else if (doc.data().date == 'Oct'){
            data[5].val += doc.data().cost
        }
        }, []);
    }
    putData()

    return data
}