function Connection( room_name )
{
	//INIT
	this.room_name = room_name;
	//Aquest variable no la fem servir

	this.server = new SillyClient();

	this.connect = function()
	{
		this.server.connect("84.89.136.194:9000", this.room_name);
		this.server.on_ready();
	};

	//this method is called when the user gets connected to the server
	this.server.on_ready = function( id )
	{
		this.sendMessage( JSON.stringify( {type: messageKind.connect, name: player.name, avatar: player.avatar } ) );
	};

	//this methods receives messages from other users (author_id its an unique identifier)
	this.server.on_message = function( author_id, msg )
	{
		missatges.missatge( msg );
	};

	//this methods is called when a new user is connected
	this.server.on_user_connected = function(msg) {};

	this.server.on_close = function()
	{
		//this.sendMessage( JSON.stringify( {typer: messageKind.disconect } ) );
	};
};
