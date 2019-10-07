import Firebase from 'firebase'

let app = Firebase.initializeApp( {
  apiKey: "AIzaSyDnT6gW3pqhWWl8EHyGQgKb2bc4D6SffXU",
  authDomain: "sweng-581-capstone.firebaseapp.com",
  databaseURL: "https://sweng-581-capstone.firebaseio.com",
  projectId: "sweng-581-capstone",
  storageBucket: "sweng-581-capstone.appspot.com",
  messagingSenderId: "847848697992",
  appId: "1:847848697992:web:1b7bf75e83a0ef62dfef3d",
  measurementId: "G-D1PG6M1YMT"
  })

export const db = app.database();
export const auth = app.auth();
export const auth_ = Firebase.auth;