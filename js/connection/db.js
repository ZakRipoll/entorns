// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZ9hCSJw42Z3IppgaCKVBiYfgbXkSVKnQ",
  authDomain: "battleship-b1d32.firebaseapp.com",
  databaseURL: "https://battleship-b1d32.firebaseio.com",
  storageBucket: "battleship-b1d32.appspot.com",
  messagingSenderId: "941933552368"
};
firebase.initializeApp(config);

function login(user,pass)
{
  firebase.auth().signInWithEmailAndPassword(user + "@lamamadenbambi.cat", password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
function signup(user,password)
{
  firebase.auth().createUserWithEmailAndPassword(user + "@lamamadenbambi.cat", password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log( errorMessage );
    // ...
  });

  console.log( firebase.auth().currentUser );
}

function avatar()
{
  firebase.auth().currentUser.photoURL = avatar.zoro;
}
