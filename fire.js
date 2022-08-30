import {initializeApp, getApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_auth_domain',
  projectId: 'your_project_id',
  storageBucket: 'your_storage_bucket',
  messagingSenderId: 'your_messaging_sender_id',
  appId: 'your_app_id',
  measurementId: 'your_measurement_id', // optional
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};

// const Fire = () => {
//   const init = () => {
//     if (!firebase.app.length) {
//       firebase.initializeApp({
//         apiKey: 'AIzaSyB-P37j8w7lZzErr0xoUiqskjDkPAbDEj0',
//         authDomain: 'learnfirebase-10027.firebaseapp.com',
//         databaseURL:
//           'https://learnfirebase-10027-default-rtdb.asia-southeast1.firebasedatabase.app',
//         projectId: 'learnfirebase-10027',
//         storageBucket: 'learnfirebase-10027.appspot.com',
//         messagingSenderId: '373829059338',
//         appId: '1:373829059338:web:cbab99b2d9dea8859170f3',
//         measurementId: 'G-9Q4ZF0CMS3',
//       });
//     }
//   };
//   const checkAuth = () => {
//     firebase.auth().onAuthStateChange(user => {
//       if (!user) {
//         firebase.auth().signInAnonymously();
//       }
//     });
//   };
//   const send = mess => {
//     mess.forEach(element => {
//       const message = {
//         text: element.text,
//         timeStamp: firebase.database.serverValue.TIMESTAMP,
//         user: element.user,
//       };
//     });
//   };
//   const parse = mess => {
//     const {user, text, timestamp} = mess.val();
//     const {key: _id} = mess;
//     const createAt = new Date(timestamp);
//     return {
//       _id: _id,
//       createAt: createAt,
//       text: text,
//       user: user,
//     };
//   };
//   const getdb = () => {
//     return firebase.database().ref('mess');
//   };
//   const get = () => {
//     getdb().on;
//   };
// };
