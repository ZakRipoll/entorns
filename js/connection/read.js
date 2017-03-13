var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function read()
{
    reader.open('get', 'js/connection/users.txt', true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents()
{
	console.log( reader.responseText );
}
