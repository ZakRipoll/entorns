var lastMousePosition = new THREE.Vector2( 0, 0 ), pos, c = 0, comprovacio;

/* ****************************************************** MOUSEMOVE ****************************************************** */
container.addEventListener('mousemove', function(e)
{
	pos = positionate( raycasting( e.offsetX, e.offsetY ) );

	player.actual.position.x = onTauler( pos.x );
	player.actual.position.y = dimensio * 5;
	player.actual.position.z = onTauler( pos.z );

}, false);

container.addEventListener('mousedown', function(e)
{
	if( !dintreTauler() )
		return;

	switch( e.button )
	{
		case 0:

			scene.add( player.actual );

			player.loadBoats();

			player.incrementActualBoat();

			player.boardPosition( shoot.worldToBoard( pos.x, pos.z ) );


		break;

		case 1:

		break;

		case 2:

			directShoot( [ pos.z, pos.x ] );

		break;
	};
}, false);

container.oncontextmenu = function () {
   return false;
}

/* ***************************************************** RAY TRAICING **************************************************** */
function raycasting( x, y )
{
	var raycaster = new THREE.Raycaster();
	var screenMouse = new THREE.Vector2( ( x / container.childNodes[0].width ) * 2 - 1,
										-( y / container.childNodes[0].height ) * 2 + 1 );

	raycaster.setFromCamera( screenMouse, camera );

	var intersects = raycaster.intersectObjects( scene.children );

	if ( intersects.length == 0 )

		return;

	return { x: intersects[ 0 ].point.x, z: intersects[ 0 ].point.z }
};

function intesectionInfinitePlane( x, y )
{
	var vector = new THREE.Vector3( x, y, .5);
	var normal = new THREE.Vector3( 0, 1, 0 );

	vector = vector.unproject( camera );

	var ray = vector.sub( camera.position ).normalize();

	var demonimador = ray.dot( normal );

	var distance;

	if( demonimador )

		distance = ( - camera.position.dot( normal ) ) / demonimador;

	else return;

	var copy = new THREE.Vector3( ray.x, ray.y, ray.z );

	var intersects = copy.multiplyScalar( distance ).add( camera.position );

	return positionate( { x: intersects.x, z:intersects.z } )
};

/* *********************************************** POSITIONATE IN THE BOARD *********************************************** */
function onTauler( coord )
{
	if( coord > 500 )

		coord = 450;

	else if( coord < -500 )

		coord = -450;

	return coord;
};

function positionate( pos )
{
	var x = parseInt( pos.x - pos.x % 100 );
	var z = parseInt( pos.z - pos.z % 100 );

	return { x: pos.x > 0 ? x + 50 : x - 50, z: pos.z > 0 ? z + 50 : z - 50 }
}

function dintreTauler( )
{
	return ( -500 < Math.abs( pos.x ) && Math.abs( pos.x ) < 500 && -500 < Math.abs( pos.z ) && Math.abs( pos.z ) < 500 );
}
