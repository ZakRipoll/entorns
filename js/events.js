var lastMousePosition = new THREE.Vector2( 0, 0 ), pos, c = 0, comprovacio;

/* ******************************************************** WHEEL ******************************************************** */
container.addEventListener('wheel', function(e)
{
	useWheel( e.wheelDelta > 0 ? true : false );

}, false);

/* ****************************************************** MOUSEMOVE ****************************************************** */
container.addEventListener('mousemove', function(e)
{
	pos = positionate( raycasting( e.offsetX, e.offsetY ) );

	actual.position.x = onTauler( pos.x );
	actual.position.y = dimensio * 5;
	actual.position.z = onTauler( pos.z );

	console.log( pos.x + ", " + pos.z );

}, false);

container.addEventListener('mousedown', function(e)
{
	if( !dintreTauler() )
		return;
		
	switch( e.button )
	{
		case 0:

			var boat = factory.createBoat( 'imatges/boat.obj', "Boat" );

			boat.position.set( pos.x, 50, pos.z );

			debug.actualPosition( boat );

			scene.add( boat );

		break;

		case 1:

		break;

		case 2: message.shoot( pos.z, pos.x ); 	break;
	};
}, false);

container.oncontextmenu = function () {
   return false;
}

container.addEventListener("mouseout", function(e)
{

}, false);

container.addEventListener("mouseup", function(e)
{

}, false);

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

	console.log( intersects )

	if( intersects.length == 3)
	{
		comprovacio = intersects;
		console.log( "S'ha de mirar de com posar el nom" );
	}

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

/* ********************************************************* ZOOM ********************************************************* */
function useWheel( move )
{
	var max = utils.max( camera.position.x, camera.position.y, camera.position.z );

	var far = ( max > 1500 );

	var near = ( max < 1000);

	max *= utils.speed( max );

	debug.objectPosition( camera );

	if( !far )
	{
		if ( camera.position.x != 0 )

			camera.position.x += camera.position.x/max;

		if ( camera.position.y != 0 )

			camera.position.y += camera.position.y/max;

		if ( camera.position.z != 0 )

			camera.position.z += camera.position.z/max;
	}
	else if ( !near )
	{
		if ( camera.position.x != 0 )

			camera.position.x -= camera.position.x/max;

		if ( camera.position.y != 0 )

			camera.position.y -= camera.position.y/max;

		if ( camera.position.z != 0 )

			camera.position.z -= camera.position.z/max;
	}

	camera.lookAt( scene.getObjectByName( "tauler" ).position );
};

/* ******************************************************** CAMERA ******************************************************** */
function useMouse( e, kind )
{
	var max = utils.max( camera.position.x, camera.position.y, camera.position.z ) * 100;

	/*if( 500 < max && max < 5000  )

		return;*/

	var mouse = unitariMove( e.offsetX, e.offsetY )

	console.log( mouse );

	switch( kind.toUpperCase() )
	{
		case "XY":

		camera.position.x -= mouse.x;
		camera.position.y += mouse.x;

		break;

		case "XZ": //Vista des de'l a baix a la esquerra, mirat des de l'usuari

		camera.position.x -= mouse.x;
		camera.position.z -= mouse.y;

		break;

		case "YZ": //Vista des de'l a baix el centre, mirat des de l'usuari

		camera.position.y -= mouse.x;
		camera.position.z += mouse.y;

		break;
	};

	camera.lookAt( scene.getObjectByName( "tauler" ).position );
};

/* ******************************************************** MOVES ******************************************************** */
function unitariMove( x, y )
{
	var mouse = new THREE.Vector2( 0, 0 );

	mouse.x = lastMousePosition.x - x;
	mouse.y = lastMousePosition.y - y;

	setCoordinates( x, y );

	return mouse
};

function setCoordinates( x, y )
{
	lastMousePosition.x = x;
	lastMousePosition.y = y;
};
