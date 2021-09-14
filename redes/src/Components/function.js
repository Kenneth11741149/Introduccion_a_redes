

import db from './firebase.js'
import { collection, getDocs } from "firebase/firestore"; 
/*
async function getAllTickets() {
    var data = await (async () => {
        try {
            console.log(db)
            let query = db.collection('tickets')
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        idTicket: doc.id,
                        entrada: doc.data().entrada
                    };
                    response.push(selectedItem);
                }
            });
            return response
        } catch (error) {
            console.log(error);
        }
    })()
    return data
}
*/


async function getAllTickets() {
    var data = await (async () => {
        let response = [];

        const querySnapshot = await getDocs(collection(db, "tickets"));
        querySnapshot.forEach((doc) => {

            const selectedItem = {
                idTicket: doc.id,
                entrada: doc.data().entrada
            };
            response.push(selectedItem);
          //console.log(`${doc.id} => ${doc.data()}`);
        });
        return response
    })()
    return data
}

export default {
    getAllTickets


}