import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBH4Pu9K3CVoHjfgv3tysqUEghs88GdiNs',
  authDomain: 'chatapp-bcae0.firebaseapp.com',
  databaseURL: 'https://chatapp-bcae0.firebaseio.com',
  projectId: 'chatapp-bcae0',
  storageBucket: 'chatapp-bcae0.appspot.com',
  messagingSenderId: '820889591801',
  appId: '1:820889591801:web:ccb93eb008e47cacf52728',
  measurementId: 'G-K9PKJ8YLBH'
};

firebase.initializeApp(firebaseConfig);
