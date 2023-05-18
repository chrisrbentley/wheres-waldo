import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwn0l_N7eNarh7Be3wCbExlpr5DwWFX1U',
  authDomain: 'where-is-waldo-524c0.firebaseapp.com',
  projectId: 'where-is-waldo-524c0',
  storageBucket: 'where-is-waldo-524c0.appspot.com',
  messagingSenderId: '445273597593',
  appId: '1:445273597593:web:1417810726f0c8bd2a7a08',
  measurementId: 'G-FLLTG79P8H',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
