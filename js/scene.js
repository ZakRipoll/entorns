/* ************************************** google-chrome --allow-file-access-from-files ************************************** */

// standard global variables
var container, scene, camera, renderer, controls, stats;
var deltaTime = new THREE.Clock();

// custom global variables
var mesh;

var dimensio = 10;

var basePlane;

function init()
{	
	scene = new THREE.Scene();
	
	container = document.getElementById( "ThreeJS" );
	
	var SCREEN_WIDTH = container.clientWidth;

	var SCREEN_HEIGHT = container.clientHeight;
	
	camera = createCamera( 45, SCREEN_WIDTH / SCREEN_HEIGHT, .1, 2000);

	camera.position.y = 15;

	viewSet( view.top );

	scene.add( camera );

	renderer = createRenderer( SCREEN_WIDTH, SCREEN_HEIGHT );

	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

	scene.add( createLight( 100, 250, 100, 0xffffff ) );

	scene.add( createSkybox( ) );

	scene.add( createPlane( ) );

	scene.add( createAxis( ) );

	camera.lookAt( scene.getObjectByName( "tauler" ).position );
};

/* ********************************************************* CAMERA ********************************************************* */
function createCamera( angle, aspect, near, far, name )
{
	var camera = new THREE.PerspectiveCamera( angle, aspect, near, far );
	camera.name = name || "camera";
	return camera;
};

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

/* ********************************************************* LIGHT ********************************************************* */
function createLight( x, y, z, color, name )
{
	var light = new THREE.PointLight( color || 0xff0000 );
	light.position.set( x, y, z );
	light.name = name || "light";
	return light;
};

/* ********************************************************** AXIS ********************************************************** */
function createAxis()
{
	var axis = new THREE.AxisHelper( dimensio );
	axis.position.y = .01;
	return axis;
};

/* ******************************************************** RENDERE ******************************************************** */
function createRenderer( width, height )
{
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 

	renderer.setSize( width, height );

	return renderer;
};

/* ********************************************************* PLANE ********************************************************* */
function createPlane()
{
	var squareT = new THREE.ImageUtils.loadTexture("imatges/square-thick.png");
	squareT.wrapS = squareT.wrapT = THREE.RepeatWrapping;
	squareT.repeat.set( dimensio, dimensio );

	var planeMat = new THREE.MeshBasicMaterial({map:squareT, color:0xbbbbbb});
	var planeGeo = new THREE.PlaneGeometry( dimensio, dimensio );
	basePlane = new THREE.Mesh(planeGeo, planeMat);

	basePlane.rotation.x = -Math.PI / 2;
	basePlane.name = "tauler";

	return basePlane;
};

/* ********************************************************* SKYBOX ********************************************************* */
function createSkybox()
{
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x4bbcfa, side: THREE.BackSide } );
	var skyBoxGeometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
	return new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
};

/* ********************************************************* WAVES ********************************************************* */
function wobble()
{
	for(var i=0; i < verts.length; i++)
		verts[i].z = Math.sin( deltaTime );

	geometry.verticesNeedUpdate = true;
	geometry.colorsNeedUpdate = true;
};

/* ********************************************************* RENDER ********************************************************* */
function render()
{
	requestAnimationFrame( render );

	renderer.render(scene, camera);
};
init();
render();
