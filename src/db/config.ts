import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOVEKw_awRKycUt8aHdH2ltNuJ-eFJKE8',
  authDomain: 'gestao-financeira-7b353.firebaseapp.com',
  projectId: 'gestao-financeira-7b353',
  storageBucket: 'gestao-financeira-7b353.appspot.com',
  messagingSenderId: '45331468880',
  appId: '1:45331468880:web:07aca1f6e3b2f3ddab3755',
};

const app = initializeApp(firebaseConfig);

const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {database};
