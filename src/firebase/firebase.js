import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };

//   firebase.database().ref().set({
//       name: 'Bao Luong',
//       age: 32,
//       job: {
//           title: 'dev',
//           location: 'tampa'
//       },
//       location: {
//           city: 'stpete',
//           country: 'usa'
//       }
//   });
// const fetchData = firebase.database().ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title}.`);
// });

// firebase.database().ref('job/title').set('Developer');