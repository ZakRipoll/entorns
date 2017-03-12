/* ************************************** google-chrome --allow-file-access-from-files ************************************** */
var container, desk, scene, destroy, camera, renderer, geometry, textureLoader;
var dimensio = 10, c = 0, amplada = 5, rotations = 0
var player, adversarial, actualdesk = 1

function init()
{
	destroy = new THREE.Scene();

	scene = new THREE.Scene();

	desk = new THREE.Scene();

	textureLoader = new THREE.TextureLoader();

	//player = new Player( "iZac", avatar.brook );

	player.loadBoats();

	printMsg( "Hello, " + player.name, 1 );

	container = document.getElementById( "ThreeJS" );

	var SCREEN_WIDTH = container.clientWidth;

	var SCREEN_HEIGHT = container.clientHeight;

	renderer = factory.createRenderer( SCREEN_WIDTH, SCREEN_HEIGHT );

	renderer.autoClear = false;

	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	desk.add( factory.createLight( -1000, 200 * dimensio, -1000, 0xffebcc ) );

	desk.add( factory.createPlane( 20, "mar", 'imatges/Calm-ocean.jpg') );

	desk.add( factory.createPlane( 12.5, "border", 'imatges/tauler.png') );

	desk.add( factory.createPlane( dimensio, "tauler" ) );

	desk.add( factory.createAxis( ) );

	geometry = desk.getObjectByName( "mar" ).geometry;

	desk.getObjectByName( "mar" ).position.y -= deep * 2;

	desk.getObjectByName( "border" ).position.y -= deep;

	scene.add( factory.createLight( 0, 200 * dimensio, 0, 0xffffff ) );

	scene.add( player.actual );

	destroy.add( factory.createLight( 0, 200 * dimensio, 0, 0xffffff ) );

	camera = factory.createCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, 1000, 3000);

	camera.position.set( 0, SCREEN_HEIGHT * 2, 0 );

	camera.lookAt( desk.getObjectByName( "tauler" ).position );
};

/* ********************************************************* RENDER ********************************************************* */
function render()
{
	animate.createSea( c++ );

	requestAnimationFrame( render );

	renderer.clear();
	renderer.render( desk, camera );

	renderer.clearDepth();
	renderer.render( actualdesk ? scene : destroy, camera );
};
