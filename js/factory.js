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
		var light = new THREE.PointLight( color || 0x000000 );
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

		var material

		if( name == "tauler" )

			material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: true } );

		else

			material = new THREE.MeshPhongMaterial( {map:textureLoader.load( 'imatges/Calm-ocean.jpg'), wireframe: false } );

		var basePlane = new THREE.Mesh( geometry, material );

		basePlane.rotation.x = -Math.PI*.5;

		basePlane.name = name;

		return basePlane;
	},

/* ***************************************************** CREATE BOAT ***************************************************** */
	createBoat: function( url, name, that, size )
	{
		var manager = new THREE.LoadingManager();
		var loader = new THREE.OBJLoader( manager );

		loader.load( url, function ( object )
		{
			object.traverse(function( child )
			{
				if(child instanceof THREE.Mesh)
				{
					child.scale.x = 1.6;
				}
				object.name = name;
			});

			that.boats.push( new Boat( object, size, name, new THREE.Box3().setFromObject( object ).size() ) );

			that.actual = that.boats[ that.boats.length - 1 ]

			scene.add( that.actual.object );
		});
	},

	createText: function( )
	{
		var material = new THREE.MeshPhongMaterial({ color: 0xdddddd });
		var textGeom = new THREE.TextGeometry( 'Hello World!', {
				font: 'Roboto Regular'
		});
		var textMesh = new THREE.Mesh( textGeom, material );

		scene.add( textMesh );
	}
};
