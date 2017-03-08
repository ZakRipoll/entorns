var logName = document.getElementById("userName");
var setImage = document.getElementById("image");
logName.focus();

function clearLogin()
{
	document.getElementById("login").style.visibility ='hidden';

	delete logName;
	delete setImage;
};

function testImage(URL){
	var tester=new Image();
	tester.onerror=imageNotFound;
	tester.src=URL;
}

function imageNotFound(){
	client.avatar = "icon/ic_perm_identity_white_24dp_2x.png";
}

function checkCookies()
{
	if ( sessionStorage.length == 0 )
		document.getElementById("login").style.visibility='visible';
	else {
		client.username = sessionStorage.name;
		client.avatar = sessionStorage.avatar;
		testImage(client.avatar);
		clearLogin();
		connect();
	}
};

function login()
{
	if(logName.value == "")
		return;

	client.username = logName.value;
	client.avatar = setImage.value;
	client.avatar = client.avatar.trim();
	testImage(client.avatar);

	sessionStorage.name = logName.value;
	sessionStorage.avatar = setImage.value;

	clearLogin();
	connect();
};

function checkDirection( actual, other )
{
	if(	actual.value != "" )
		login();
	else
		other.focus();
};

checkCookies();

logName.addEventListener("keyup", function(event){
	event.preventDefault();
	if( event.keyCode == 13 )
		checkDirection(logName, setImage);
});

setImage.addEventListener("keyup", function(event){
	event.preventDefault();
	if(event.keyCode == 13)
		checkDirection(setImage, logName);
});
