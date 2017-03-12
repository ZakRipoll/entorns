var missatges =
{
  missatge: function( msg )
  {
    msg = JSON.parse( msg );

    switch ( msg.type )
    {
      case messageKind.connect:

      server.sendMessage( JSON.stringify( {type: messageKind.salute, name: player.name, avatar: player.avatar } ) );

      case messageKind.salute:

        adversarial = { name: msg.name, avatar: msg.avatar };

        printMsg( "Hi I'm " + msg.name, 0 );

      break;

      case messageKind.message:

        printMsg( msg.message, 0 );

      break;

      case messageKind.shoot:

        checkMessage( [ msg.coord.x, msg.coord.y ] );

      break;

      case messageKind.hitmiss:

        printHitMiss( msg.bool );

      break;

      case messageKind.result:

        //Acabar partida

      break;

      case messageKind.disconect:

        //Guardar partida

      break;
    };
  }
};
