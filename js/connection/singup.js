var connection
function checkCookies()
{
  if ( sessionStorage.length == 0 )
  {
    return;
  }

  player = new Player( sessionStorage.name, sessionStorage.avatar );

  start( sessionStorage.room ? sessionStorage.room : sessionStorage.name );
}

checkCookies();

document.querySelector('[name = "passwordConfirm"]').addEventListener("keydown", keyDownTextField, false);
document.getElementById('signup').addEventListener("click", showSignup, false);
document.querySelector('#submit').addEventListener("click", click, false);

var selectCharacter = document.querySelectorAll(".icon");

selectCharacter.forEach(function(e)
{
  e.onclick = function()
  {
    s = document.querySelector('.selected');
    s.className = "icon";
    this.className = "icon selected";
  }
});

function click()
{
  document.getElementById( "submit" ).innerText == "SIGN UP" ?  onSignUp() : onLogin();
}

function showSignup( )
{
  document.getElementById( "intpusSignUp" ).style.display = "block";
  document.getElementById( "icons" ).style.display = "flex";
  document.getElementById( "intpusLogIn" ).style.display = "none";
  document.getElementById( "submit" ).innerText = "SIGN UP";
}

function keyDownTextField(e)
{
  if( e.keyCode == 13 )
  {
    onSignUp();
  }
}

onSignUp = function()
{
  var nomUsuari = document.querySelector('[name = "userName"]').value;
  var contrasenya = document.querySelector('[name = "password"]').value;

  if( nomUsuari && contrasenya == document.querySelector('[name = "passwordConfirm"]').value )
  {
    var split = document.querySelector(".selected").children[0].src.split("/");

    var imatge = split[split.length-3] + "/" + split[split.length-2]+ "/" + split[split.length-1];

    var user = signup( nomUsuari, contrasenya, imatge, setProfilePictue );

    player = new Player( nomUsuari, imatge );

    sessionStorage.name = nomUsuari;

    sessionStorage.avatar = imatge;

    sessionStorage.room = !document.getElementById("room").value ? nomUsuari : document.getElementById("room").value

    start( sessionStorage.room );
  }
}

setProfilePictue = function( imatge, usuari )
{
    usuari.updateProfile({
    displayName: "avtatar",
    photoURL: imatge
    }).then(function() {
    // Update successful.
    }, function(error) {
    // An error happened.
    });
}

function start(room)
{
  document.getElementById( "loginContainer" ).style.display = "none";

  init();

  comencem();

  render();

  connection = new Connection( room );

  connection.connect();
}
