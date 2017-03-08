/* ************************************** google-chrome --allow-file-access-from-files ************************************** */
var container, scene, camera, renderer, geometry, actual,textureLoader;
var dimensio = 10, c = 0, amplada = 5, rotations = 0
var player, adversarial

function init()
{
	scene = new THREE.Scene();

	textureLoader = new THREE.TextureLoader();

	player = new Player( "iZac", avatar.brook );

	printMsg( "Hello, " + player.name, 1 );

	adversarial = new Player( "Aurel", avatar.rufy );

	printMsg( "Hello, " + adversarial.name, 0 );

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

	scene.add( factory.createPlane( 13, "mar") );

	scene.add( factory.createPlane( dimensio, "tauler" ) );

	scene.add( factory.createAxis( ) );

	scene.add( player.actual );

	geometry = scene.getObjectByName( "mar" ).geometry;

	scene.getObjectByName( "mar" ).position.y -= deep*2;	

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
