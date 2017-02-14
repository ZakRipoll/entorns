/* ************************************** google-chrome --allow-file-access-from-files ************************************** */

// standard global variables
var container, scene, camera, renderer, controls, stats;
var keyboard = new KeyboardState();
var clock = new THREE.Clock();

// custom global variables
var mesh;
var person;

function init()
{	
	scene = new THREE.Scene();
	
	container = document.getElementById( "ThreeJS" );

	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	
	camera = createCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 2000);
	camera.position.set( 0, 1.0, 4.0 );

	person = new THREE.Object3D();
	person.add(camera);

	viewSet( view.top );

	scene.add(person);

	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 

	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	scene.add( createLight( 100, 250, 100, 0xffffff ) );

	scene.add( createSkybox() );

	scene.add( createAxis() );

	var squareT 	= new THREE.ImageUtils.loadTexture("imatges/square-thick.png");
	squareT.wrapS 	= squareT.wrapT = THREE.RepeatWrapping;
	squareT.repeat.set(32,32);

	this.planeGeo 	= new THREE.PlaneGeometry(32,32);
	this.planeMat 	= new THREE.MeshBasicMaterial({map:squareT, color:0xbbbbbb});
	this.basePlane 	= new THREE.Mesh(planeGeo, planeMat);

	basePlane.rotation.x = -Math.PI / 2;
	basePlane.position.set(16,0,16);
	basePlane.base = true;

	scene.add(basePlane);
};

/* ********************************************************* CAMERA ********************************************************* */
function createCamera( angle, aspect, near, far )
{
	return new THREE.PerspectiveCamera( angle, aspect, near, far );
};

function viewSet( position )
{
	switch( position )
	{
		case view.ground: // on ground near origin

		person.position.set(-3, 3, 6);
		person.rotation.set(0, -Math.PI / 2.0, 0); 

		camera.rotation.set(-Math.PI / 16.0, 0, 0); 

		break; 

		case view.top: // birds-eye view

		person.position.set(16, 42, 16);
		person.rotation.set(0, -Math.PI / 2.0, 0); 

		camera.rotation.set(-1.48, 0, 0); 

		break;

	};
};

/* ********************************************************* LIGHT ********************************************************* */
function createLight( x, y, z, color )
{
	var color = color || 0xff0000; 
	var light = new THREE.PointLight( color );
	light.position.set( x, y, z );
	return light;
};

/* ********************************************************** AXIS ********************************************************** */
function createAxis()
{
	var axis = new THREE.AxisHelper(33);
	axis.position.y = 0.01;
	return axis;
};

/* ********************************************************* SKYBOX ********************************************************* */
function createSkybox()
{
	var skyBoxGeometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xffffee, side: THREE.BackSide } );
	return new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
};

/* ********************************************************* RENDER ********************************************************* */
function render()
{
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};
init();
render();
