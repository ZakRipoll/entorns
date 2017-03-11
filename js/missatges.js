var missatges =
{
  function missatge( msg )
  {
    msg = JSON.parse( msg );

    switch ( msg.type )
    {
      case messageKind.connect:

      server.sendMessage( JSON.stringify( {typer: messageKind.salute, name: player.name, avatar: player.avatar } ) );

      case messageKind.salute:

        adversarial = { name: msg.name, avatar: msg.avatar };

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
  };
};
