var missatges =
{
  missatge: function( msg )
  {
    msg = JSON.parse( msg );

    switch ( msg.type )
    {
      case messageKind.connect:

      connection.server.sendMessage( JSON.stringify( {type: messageKind.salute, name: player.name, avatar: player.avatar } ) );

      mytorn = true;

      case messageKind.salute:

        adversarial = { name: msg.name, avatar: msg.avatar };

        printMsg( "Hi I'm " + msg.name, 0 );

      break;

      case messageKind.message:

        printMsg( msg.message, 0 );

      break;

      case messageKind.shoot:

        var name;

        printMsg( shoot.printGame( msg.x, msg.y ), 0);

        var tiro = shoot.gameToBoard( msg.x, msg.y );

        var encert = player.isWater( tiro[0], tiro[1] );

        if( encert )
        {
          name = player.boats[ player.board[ tiro[0] ][ tiro[1] ] ].name
        }

        connection.server.sendMessage( JSON.stringify( {type: messageKind.hitmiss, bool: encert, x: tiro[0], y: tiro[1], name: name } ) );

        tiro = shoot.boardToWorld( tiro[0], tiro[1] );

        //scene.add( debug.createCubeRay( tiro[1], 1, tiro[0], encert ? new THREE.MeshLambertMaterial({color: 0xFFA500}) : new THREE.MeshLambertMaterial({color: 0x00FF25}) ) );
        scene.add( factory.createCylinder( tiro[1], tiro[0], encert ? new THREE.MeshLambertMaterial({color: 0xff0000}) :  new THREE.MeshLambertMaterial({color: 0xffffff}) ) );

        mytorn = true;

      break;

      case messageKind.hitmiss:

        printHitMiss( msg.bool, shoot.boardToWorld( msg.x, msg.y ), msg.name );

        mytorn = false;

      break;

      case messageKind.result:

        printMsg( "You win", 0 );
        destroy.add( factory.createCylinder( tiro[1], tiro[0],new THREE.MeshLambertMaterial({color: 0x990000}) ) );
        document.getElementById( "final" ).sstyle.backgroundImage = "url('../imatges/win.png')";
        document.getElementById( "final" ).style.display = "flex";

      break;

      case messageKind.disconect:

        //Guardar partida

      break;

      case messageKind.start:

        other = true;

        printMsg( "I'm ready ", 0 );

      break;
    };
  }
};
