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
	createPlane: function( dimensio, name, imatge )
	{
		var size = dimensio * 100;

		var geometry = new THREE.PlaneGeometry( size, size, dimensio, dimensio );

		var material

		if( name == "tauler" )

			material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: true } );

		else
		{
			material = new THREE.MeshPhongMaterial( {map:textureLoader.load( imatge ), wireframe: false } );

			if( imatge.substr(imatge.length - 3) == "png" )
			{
				material.transparent = true;
			}
		}

		var basePlane = new THREE.Mesh( geometry, material );

		basePlane.rotation.x = -Math.PI*.5;

		basePlane.name = name;

		return basePlane;
	},

/* ***************************************************** CREATE BOAT ***************************************************** */
	createBoat: function( url, name, that, size, id )
	{
		var manager = new THREE.LoadingManager();
		var loader = new THREE.OBJLoader( manager );

		loader.load( url, function ( object )
		{
			object.traverse( function( child )
			{
				if( child instanceof THREE.Mesh )
				{
					if( size == 2 )
					{
						child.scale.x = .6;
						name = "Destroyer";
					}
					else if( size == 4 )
					{
						child.scale.x = 1.4;
						child.scale.z = 1.1;
						name = "Battleship";
					}
					else if( size == 5 )
					{
						child.scale.x = 1.8;
						child.scale.z = 1.2;
						name = "Carrier";
					}
					else
					{
						name = Math.random()%2 ? "Submarine" : "Cruiser";
					}
				}
			});

			that.boats.push( new Boat( object, size, name, new THREE.Box3().setFromObject( object ).size(), id ) );

			that.actual = that.boats[ that.boats.length - 1 ];

			scene.add( that.actual.object );
		});
	}
};
