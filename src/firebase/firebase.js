import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child removed
// database.ref('Expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_changed
// database.ref('Expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_added
// database.ref('Expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // database.ref('Expenses').once('value').then(snapshot => {
// //   const expenses = [];
// //
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //
// //   console.log(expenses);
// // });
//
// // database.ref('Expenses').on('value', snapshot => {
// //   const expenses = [];
// //
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //
// //   console.log(expenses);
// // });
//
// database.ref('Expenses').push({
//   description: 'one',
//   note: 'a note',
//   amount: 5632,
//   createdAt: 321
// });
