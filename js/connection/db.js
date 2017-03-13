// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZ9hCSJw42Z3IppgaCKVBiYfgbXkSVKnQ",
  authDomain: "battleship-b1d32.firebaseapp.com",
  databaseURL: "https://battleship-b1d32.firebaseio.com",
  storageBucket: "battleship-b1d32.appspot.com",
  messagingSenderId: "941933552368"
};
firebase.initializeApp(config);

function login(user,password, callback)
{
  firebase.auth().signInWithEmailAndPassword(user + "@lamamadenbambi.cat", password).then(function(user)
  {

  player = new Player(user.email.split("@")[0], user.photoURL);
  callback();

}, function(error)
  {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log( errorMessage.length );
  });
}
function signup(user, password, imatge, callback)
{
  //signOut();
  firebase.auth().createUserWithEmailAndPassword(user + "@lamamadenbambi.cat", password).then(function(user) {
  callback( imatge, user);
}, function(error)
  {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function signout()
{
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
}
