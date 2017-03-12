document.querySelector('[name = "passwordConfirm"]').addEventListener("keydown", keyDownTextField, false);
document.getElementById('signup').addEventListener("click", showSignup, false);
document.querySelector('#submit').addEventListener("click", click, false);

var selectCharacter = document.querySelectorAll(".icon");

console.log( selectCharacter );

selectCharacter.forEach(function(e){
  e.onclick = function(){
    s = document.querySelector('.selected');
    s.className = "icon";
    this.className = "icon selected";
  }
});

function click()
{
  document.getElementById('signup').innerText == "SING UP" ?  onSignUp() : onLogin();
}

function showSignup( )
{
  document.getElementById( "intpusSignUp" ).style.display = "block";
  document.getElementById( "icons" ).style.display = "flex";
  document.getElementById( "intpusLogIn" ).style.display = "none";
  document.getElementById( "submit" ).innerText = "SING UP";
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
    signup( nomUsuari, contrasenya );
  }
}

function chooseIcon()
{
  document.querySelector(".icon").style.border = "thick solid #0000FF";
}
