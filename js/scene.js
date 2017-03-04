/* ************************************** google-chrome --allow-file-access-from-files ************************************** */
var container, scene, camera, renderer, geometry, material, cube, basePlane, dimensio = 10, c = 0, amplada = 5

function init()
{	
	scene = new THREE.Scene();

	scene.add( createOBJ.createBoat() );
	
	container = document.getElementById( "ThreeJS" );
	
	var SCREEN_WIDTH = container.clientWidth;

	var SCREEN_HEIGHT = container.clientHeight;
	
	camera = factory.createCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 5000);

	//camera.position.y = 150 * dimensio;

	camera.position.set( 0, 150 * dimensio, 0 );

	//viewSet( view.top );

	scene.add( camera );

	renderer = factory.createRenderer( SCREEN_WIDTH, SCREEN_HEIGHT );

	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	scene.add( factory.createLight( 0, 100 * dimensio, 0, 0xffffff ) );

	scene.add( factory.createSkybox( ) );

	scene.add( factory.createPlane( dimensio ) );

	scene.add( factory.createAxis( ) );

	cube = debug.createCube( amplada || 1 );

	scene.add( cube );

	camera.lookAt( scene.getObjectByName( "tauler" ).position );

};

/* ********************************************************* CAMERA ********************************************************* */
function viewSet( position )
{
	switch( position )
	{
		case view.ground:

		break; 

		case view.top:

		camera.position.set( 0, camera.position.y, 0 );

		break;

		case view.bottom:

		camera.position.set( 0, -camera.position.y, 0 );

		break;
	};
};



/* ********************************************************* RENDER ********************************************************* */
function render()
{
	factory.createSea( c++ );

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

init();
render();
