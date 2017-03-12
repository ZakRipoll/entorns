messageStruck.chat.addEventListener("keyup", function(event)
{
	event.preventDefault();

	if( event.keyCode != 13 || !messageStruck.input.value.length )
		return;

	var tiro = messageStruck.input.value;

	if( tiro == "escena" )
	{
		actualdesk = !actualdesk;
		return;
	};

	var coords = shoot.gameToWorld( tiro[ 0 ], tiro[ 1 ] );

	if( tiro.length == 2 && shoot.isShoot( coords ) )

		onCommand( coords );

	else if( tiro.length == 3 && tiro[ 1 ] == 1 && tiro[ 2 ] == 0 && shoot.isShoot( shoot.gameToWorld( tiro[ 0 ],  10 ) ) )

		onCommand( shoot.gameToWorld( tiro[ 0 ],  10 ) );

	else

		sendMsg( tiro, 1 );
});

function directShoot( tiro )
{
	onCommand( tiro );
};

function onCommand( tiro )
{
	var enfonsar = shoot.oneShoot( tiro[0], tiro[1] );
	sendMsg( shoot.printShoot( tiro[0], tiro[1] ), 1 );
	checkMessage( tiro );

	if( enfonsar )
	{
		printMsg( "Barco enfonsat", 0 );
	}
};

function checkMessage ( tiro )
{
		var encert = !isNaN( player.detectShoot( tiro ) );

		printHitMiss( encert );

		server.sendMessage( JSON.stringify( { type: messageKind.hitmis, bool: encert } ) );
};

function printHitMiss( encert )
{
	printMsg( "It's a " + ( encert ? "hit" : "miss" ) , 0 );
};

function sendMsg( msg )
{
	server.sendMessage( JSON.stringify( { type: messageKind.message, message: msg } ) );

	printMsg( msg, 1 );
};

function printMsg( message, user )
{
	var newMessage = document.getElementById("MessageContainer").cloneNode(true);

	newMessage.querySelector("#Text").innerText = message;

	if( !user )

		newMessage.querySelector("#ImageContainer").style.float = "left";

	newMessage.querySelector("#Image").src = user ? player.avatar : adversarial.avatar;

	newMessage.style.display = "block";

	messageStruck.messages.appendChild( newMessage );

	messageStruck.input.value = "";

	messageStruck.messages.scrollTop = messageStruck.messages.scrollHeight;
};
