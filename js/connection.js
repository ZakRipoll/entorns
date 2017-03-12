//INIT
var room_name = "battleship";
//Aquest variable no la fem servir

var server = new SillyClient();

function connect()
{
	server.connect("84.89.136.194:9000", room_name);
};

//this method is called when the user gets connected to the server
server.on_ready = function( id )
{
	server.sendMessage( JSON.stringify( {type: messageKind.connect, name: player.name, avatar: player.avatar } ) );
};

//this methods receives messages from other users (author_id its an unique identifier)
server.on_message = function( author_id, msg )
{
	missatges.missatge( msg );
};

//this methods is called when a new user is connected
server.on_user_connected = function(msg) {};

server.on_close = function()
{
	server.sendMessage( JSON.stringify( {typer: messageKind.disconect } ) );
};
