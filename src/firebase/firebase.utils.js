import firebase from 'firebase/app'; //firebase keyword which is a utility

//both firebase storage and auth are attached to 'firebase' keyword once imported
import 'firebase/firestore'; 
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2NQu7SKDT2K3zUb39KGLuSmEctBepV2A",
    authDomain: "crowndb-c0cd8.firebaseapp.com",
    databaseURL: "https://crowndb-c0cd8.firebaseio.com",
    projectId: "crowndb-c0cd8",
    storageBucket: "crowndb-c0cd8.appspot.com",
    messagingSenderId: "985931673892",
    appId: "1:985931673892:web:7a16e913505d3e2646c3b1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Setting up google authentication utility

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;