import firebase from 'firebase';
import constants from '../constants';

const firebaseApplication = () => {
  firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApplication;