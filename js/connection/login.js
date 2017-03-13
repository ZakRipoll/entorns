document.getElementById('loginButton').addEventListener("click", showLogin, false);

function showLogin( )
{
  document.getElementById( "intpusSignUp" ).style.display = "none";
  document.getElementById( "icons" ).style.display = "none";
  document.getElementById( "intpusLogIn" ).style.display = "block";
  document.getElementById( "submit" ).innerText = "LOG IN";
}

onLogin = function()
{
  var container = document.getElementById('intpusLogIn');
  login( container.children[0].value, container.children[1].value, start );
}
