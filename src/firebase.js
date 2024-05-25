import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIAmsurN3uzk-XM2R7VIlmR1NNg29baSI',
  authDomain: 'task-manager-92094.firebaseapp.com',
  projectId: 'task-manager-92094',
  storageBucket: 'task-manager-92094.appspot.com',
  messagingSenderId: '192910465328',
  appId: '1:192910465328:web:f5558e764bbedab10850f5',
  measurementId: 'G-31JY5Y5VXR',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
