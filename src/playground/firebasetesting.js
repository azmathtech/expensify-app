import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAPqVV27POFZEE6dTS8Z-waaMU0gIFNh00',
  authDomain: 'expensify-94b18.firebaseapp.com',
  databaseURL: 'https://expensify-94b18.firebaseio.com',
  projectId: 'expensify-94b18',
  storageBucket: 'expensify-94b18.appspot.com',
  messagingSenderId: '756934702511'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes/-LWqq1S25L_R88IYMsIq').update({
  body: 'Buy food'
});

// database.ref('notes').push({
//   title: 'Courses',
//   body: 'AI and video'
// });

// const firebaseNotes = {
//   notes: {
//     ljkhkasdfL: {
//       title: 'First Note',
//       body: 'this is my note'
//     },
//     yoiuyoiuyio: {
//       title: 'Another Note',
//       body: 'this is my note'
//     }
//   }
// };
//
// const notes = [
//   {
//     id: 12,
//     title: 'First Note',
//     body: 'this is my note'
//   },
//   {
//     id: '761ase',
//     title: 'Another Note',
//     body: 'this is my note'
//   }
// ];
//
// database.ref('notes').set(notes);

// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log('Error with data fetching', e);
//   }
// );
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Mike E',
//     age: 42,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Chandler',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.log('This failed', e);
//   });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().update({
//   name: 'Andrew',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null
// });

//database.ref('isSingle').set(null)

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(e => {
//     console.log('an error occured', e);
//   });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database
//   .ref('attributes')
//   .set({
//     height: 70,
//     weight: 150
//   })
//   .then(() => {
//     console.log('Data is updated');
//   })
//   .catch(e => {
//     console.log('This failed', e);
//   });

{
  /* <script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPqVV27POFZEE6dTS8Z-waaMU0gIFNh00",
    authDomain: "expensify-94b18.firebaseapp.com",
    databaseURL: "https://expensify-94b18.firebaseio.com",
    projectId: "expensify-94b18",
    storageBucket: "expensify-94b18.appspot.com",
    messagingSenderId: "756934702511"
  };
  firebase.initializeApp(config);
</script> */
}
