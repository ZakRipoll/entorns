var factory =
{
	createCamera: function( angle, aspect, near, far, name )
	{
		var camera = new THREE.PerspectiveCamera( angle, aspect, near, far );
		camera.name = name || "camera";
		return camera;
	},

/* ********************************************************* LIGHT ********************************************************* */
	createLight: function( x, y, z, color, name )
	{
		var light = new THREE.PointLight( color || 0xff0000 );
		light.position.set( x, y, z );
		light.name = name || "light";
		return light;
	},

/* ********************************************************** AXIS ********************************************************** */
	createAxis: function()
	{
		var axis = new THREE.AxisHelper( 500 );
		axis.position.y = .01;
		return axis;
	},

/* ******************************************************** RENDERE ******************************************************** */
	createRenderer: function( width, height )
	{
		if ( Detector.webgl ) renderer = new THREE.WebGLRenderer( {antialias:true} );

		else renderer = new THREE.CanvasRenderer();

		renderer.setSize( width, height );

		return renderer;
	},

/* ********************************************************* PLANE ********************************************************* */
	createPlane: function( dimensio, name )
	{
		var size = dimensio * 100;

		var geometry = new THREE.PlaneGeometry( size, size, dimensio, dimensio );

		if( name == "tauler" )
			var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: true } );

		else

			material = new THREE.MeshPhongMaterial( {map:textureLoader.load( 'imatges/Calm-ocean.jpg'), wireframe: false } );

		var basePlane = new THREE.Mesh( geometry, material );

		basePlane.rotation.x = -Math.PI / 2;

		basePlane.name = name;

		return basePlane;
	},

	createMar: function( size )
	{
		size *= 10;

		var mar = new THREE.Mesh( new THREE.PlaneGeometry( size, size ),

		new THREE.MeshBasicMaterial( { map: textureLoader.load( 'imatges/Calm-ocean.jpg' ) } ) );

		mar.rotation.x = -Math.PI / 2;

		mar.position.y = -deep

		return mar;
	},

/* ***************************************************** CREATE BOAT ***************************************************** */
	createBoat: function( url, name )
	{
		var loader = new THREE.OBJLoader();
		var container = new THREE.Object3D();

		container.name = name;

		loader.load( url, function ( object )
		{
			object.name = name;
			container.add( object );
		})
		return container;
	}

};
