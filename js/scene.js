/* ************************************** google-chrome --allow-file-access-from-files ************************************** */
var container, scene, camera, renderer, geometry, material, actual, basePlane;
var dimensio = 10, c = 0, amplada = 5, rotations = 0
var player

function init()
{
	scene = new THREE.Scene();

	player = new Player( "iZac", avatar.brook );

	container = document.getElementById( "ThreeJS" );

	var SCREEN_WIDTH = container.clientWidth;

	var SCREEN_HEIGHT = container.clientHeight;

	camera = factory.createCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 5000);

	camera.position.set( 0, 150 * dimensio, 0 );

	scene.add( camera );

	renderer = factory.createRenderer( SCREEN_WIDTH, SCREEN_HEIGHT );

	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	scene.add( factory.createLight( 0, 100 * dimensio, 0, 0xffffff ) );

	scene.add( factory.createMar( SCREEN_HEIGHT ) );

	scene.add( factory.createPlane( dimensio ) );

	scene.add( factory.createAxis( ) );

	scene.add( player.actual );

	camera.lookAt( scene.getObjectByName( "tauler" ).position );
};

/* ********************************************************* RENDER ********************************************************* */
function render()
{
	animate.createSea( c++ );

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

init();
render();
