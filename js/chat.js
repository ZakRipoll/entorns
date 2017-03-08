messageStruck.chat.addEventListener("keyup", function(event)
{
	event.preventDefault();

	if( event.keyCode != 13 || !messageStruck.input.value.length )
		return;

	var tiro = messageStruck.input.value;

	if( tiro.length == 2 && shoot.isShoot( shoot.gameToWorld( tiro[ 0 ], tiro[ 1 ] ) ) )

		possibleShoot( shoot.gameToWorld( tiro[ 0 ],  tiro[ 1 ] ) );

	else if( tiro.length == 3 && tiro[ 1 ] == 1 && tiro[ 2 ] == 0 )

		possibleShoot( shoot.gameToWorld( tiro[ 0 ],  10 ) );

	else

		sendMsg( tiro, 1 );
});

function possibleShoot( tiro )
{
	if( shoot.isShoot( tiro[ 0 ], tiro[ 1 ] ) )

		onCommand( tiro );
};

function directShoot( tiro )
{
	onCommand( tiro );
};

function onCommand( tiro )
{
	shoot.oneShoot( tiro[0], tiro[1] );
	sendMsg( shoot.printShoot( tiro[0], tiro[1] ), 1 );
	checkMessage( tiro );
};

function checkMessage( tiro )
{
		printMsg( "It's a " + ( player.detectShoot( tiro ) ? "hit" : "miss" ), 0 );
};

function sendMsg( message )
{
	//server.sendMessage( JSON.stringify( message, 0 ) );

	printMsg( message, 1 );
};

function printMsg( message, user )
{
	var newMessage = document.getElementById("MessageContainer").cloneNode(true);

	newMessage.querySelector("#Text").innerText = message;

	if( !user )

		newMessage.querySelector("#ImageContainer").style.float = "left";

	newMessage.querySelector("#Image").src = ( user ) ? player.avatar : adversarial.avatar;

	newMessage.style.display = "block";

	messageStruck.messages.appendChild( newMessage );

	messageStruck.input.value = "";

	messageStruck.messages.scrollTop = messageStruck.messages.scrollHeight;
};
