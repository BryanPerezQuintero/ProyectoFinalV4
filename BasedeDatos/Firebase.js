import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQXtc-MyWJZz4CwktNzc4AYXvs0MvFlmE",
  authDomain: "carros-6a43e.firebaseapp.com",
  databaseURL: "https://carros-6a43e-default-rtdb.firebaseio.com",
  projectId: "carros-6a43e",
  storageBucket: "carros-6a43e.appspot.com",
  messagingSenderId: "753814947053",
  appId: "1:753814947053:web:c0f8526ebe77c260d238e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;