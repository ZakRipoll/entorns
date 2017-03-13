var missatges =
{
  missatge: function( msg )
  {
    msg = JSON.parse( msg );

    switch ( msg.type )
    {
      case messageKind.connect:

      connection.server.sendMessage( JSON.stringify( {type: messageKind.salute, name: player.name, avatar: player.avatar } ) );

      case messageKind.salute:

        adversarial = { name: msg.name, avatar: msg.avatar };

        printMsg( "Hi I'm " + msg.name, 0 );

      break;

      case messageKind.message:

        printMsg( msg.message, 0 );

      break;

      case messageKind.shoot:

        printMsg( shoot.printGame( msg.x, msg.y ), 0);

        var tiro = shoot.gameToBoard(  msg.x, msg.y );

        var encert =  player.isWater( tiro[0], tiro[1] );

        connection.server.sendMessage( JSON.stringify( {type: messageKind.hitmiss, bool: encert, x: tiro[0], y: tiro[1] } ) );

        tiro = shoot.boardToWorld( tiro[0], tiro[1] );

        scene.add( debug.createCubeRay( tiro[1], 1, tiro[0], encert ? new THREE.MeshLambertMaterial({color: 0xFFA500}) : new THREE.MeshLambertMaterial({color: 0x00FF25}) ) );

      break;

      case messageKind.hitmiss:

        printHitMiss( msg.bool, shoot.boardToWorld( msg.x, msg.y ) );

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
