import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDhALsP2LILyo4gW5DFIKLHoT03plB8meo",
    authDomain: "introduccion-a-redes-9ab69.firebaseapp.com",
    databaseURL: "https://introduccion-a-redes-9ab69-default-rtdb.firebaseio.com",
    projectId: "introduccion-a-redes-9ab69",
    storageBucket: "introduccion-a-redes-9ab69.appspot.com",
    messagingSenderId: "802533742545",
    appId: "1:802533742545:web:eb1cb05d0b710c7dba32f0",
    measurementId: "G-B20BWDFNXL"
});

const db = getFirestore(firebaseApp);







export default db;