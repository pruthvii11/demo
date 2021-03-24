import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 apiKey: "AIzaSyBx8j_1FKemVvShSeCwHK6zGGy6bh3iaww",
 authDomain: "fir-7cab4.firebaseapp.com",
 projectId: "fir-7cab4",
 storageBucket: "fir-7cab4.appspot.com",
 messagingSenderId: "836598564221",
 appId: "1:836598564221:web:b3ce19da9dd66a21777814",
 measurementId: "G-T1ZWCMTP3N"


});



const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
