

import db from './firebase.js'
import { collection, getDocs, updateDoc, doc  } from "firebase/firestore"; 
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
                
                num: doc.data().num,
                entrada: doc.data().entrada,
                estado: doc.data.estado,
                horaPago: doc.data.horaPago
            };
            response.push(selectedItem);
          //console.log(`${doc.id} => ${doc.data()}`);
        });
        return response
    })()
    return data
}



async function updateTicket(uid,estado,horaPago) {
    var data = await (async () => {
        let response = [];

        const ticket = doc(db, "tickets", uid);

        // Set the "capital" field of the city 'DC'
        await updateDoc(ticket, {
        estado: estado,
        horaPago:horaPago
        });


        return true
    })()
    return data
}

export default {
    getAllTickets,
    updateTicket


}