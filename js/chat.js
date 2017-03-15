var coords;
messageStruck.chat.addEventListener("keyup", function(event)
{
	event.preventDefault();

	if( event.keyCode != 13 || !messageStruck.input.value.length )
		return;

	if( !me || !other )
	{
		sendMsg( messageStruck.input.value, 1 );
	}

	var tiro = messageStruck.input.value;

	if( tiro == "escena" )
	{
		changeSceene();
	};

	var coords = shoot.gameToWorld( tiro[ 0 ], tiro[ 1 ] );

	if( mytorn && tiro.length == 2 && shoot.isShoot( coords ) )
	{
		nouOnCommand( tiro );
	}
	else if( mytorn && tiro.length == 3 && tiro[ 1 ] == 1 && tiro[ 2 ] == 0 && shoot.isShoot( shoot.gameToWorld( tiro[ 0 ],  10 ) ) )
	{
		nouOnCommand( [ tiro[ 0 ], 10 ] );
	}
	else
	{
		sendMsg( tiro, 1 );
	}
});

function directShoot( tiro )
{
	nouOnCommand( shoot.worldToGame( tiro[0], tiro[1] ) );
};

function nouOnCommand( tiro )
{
	console.log( tiro );

	mytorn = false;

	printMsg( shoot.printGame( tiro[0], tiro[1] ), 1);

	connection.server.sendMessage( JSON.stringify( {type: messageKind.shoot, x: tiro[0], y: tiro[1] } ) );
};

function checkMessage ( tiro )
{
		var encert = !isNaN( player.detectShoot( tiro ) );

		printHitMiss( encert );

		connection.server.sendMessage( JSON.stringify( { type: messageKind.hitmis, bool: encert } ) );
};

function printHitMiss( encert, tiro, name )
{
	printMsg( ( encert ? "Hit. " + name + "." : "Miss" ), 0 );

	//destroy.add( debug.createCubeRay( tiro[1], 1, tiro[0], encert ? new THREE.MeshLambertMaterial({color: 0x990000}) :  new THREE.MeshNormalMaterial() ) );
	destroy.add( factory.createCylinder( tiro[1], tiro[0], encert ? new THREE.MeshLambertMaterial({color: 0xff0000}) :  new THREE.MeshLambertMaterial({color: 0xffffff}) ) );
};

function sendMsg( msg )
{
	connection.server.sendMessage( JSON.stringify( { type: messageKind.message, message: msg } ) );

	printMsg( msg, 1 );
};

function printMsg( message, user )
{
	var newMessage = document.getElementById("MessageContainer").cloneNode(true);

	newMessage.querySelector("#Text").innerText = message;

	if( !user )
	{
		newMessage.querySelector("#ImageContainer").style.float = "left";
	}
	newMessage.querySelector("#Image").src = user ? player.avatar : adversarial.avatar;

	newMessage.style.display = "block";

	messageStruck.messages.appendChild( newMessage );

	messageStruck.input.value = "";

	messageStruck.messages.scrollTop = messageStruck.messages.scrollHeight;
};

function changeSceene()
{
	actualdesk = !actualdesk;
	return;
}
