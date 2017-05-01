import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDxvxVZeIzJPeSOSfu7714qpsVenY5GTjM",
  authDomain: "pseudogram-5575d.firebaseapp.com",
  databaseURL: "https://pseudogram-5575d.firebaseio.com",
  projectId: "pseudogram-5575d",
  storageBucket: "pseudogram-5575d.appspot.com",
  messagingSenderId: "578501539923"
});
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
