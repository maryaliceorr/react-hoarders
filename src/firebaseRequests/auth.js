
import firebase from 'firebase';

const registerSomebody = (somebody) => {
  return firebase.auth().createUserWithEmailAndPassword(somebody.email, somebody.password);
};

const loginSomebody = (somebody) => {
  return firebase.auth().signInWithEmailAndPassword(somebody.email, somebody.password);
};

export default {registerSomebody, loginSomebody};
