var debug =
{
	dimention : 100,

	objectPosition: function ( object )
	{
		console.log( object.position.x + ", " + object.position.y + ", " + object.position.z )
	},

	createCube: function ( size )
	{
		return new THREE.Mesh( 	new THREE.CubeGeometry( this.dimention, this.dimention, this.dimention * size ),
								new THREE.MeshNormalMaterial() );
	},

	createCubeRay: function ( x, y, z, size, direction )
	{
		var cube = this.createCube( size || 1 );

		cube.position.set( x, y, z );

		switch( direction )
		{
			case 0: cube.rotation.y = -Math.PI * .5; break;
			case 1: cube.rotation.y = Math.PI * .5; break;
			case 2: cube.rotation.y = Math.PI; break;
		}

		scene.add( cube );
	},

	/* ******************************************************* ROTATIONS ******************************************************* */
	rotateRight: function ( boat )
	{
		boat.rotateY( -Math.PI/2 );

		rotations++;
		rotations%=4;
	},

	rotateLeft: function ( boat )
	{
		boat.rotateY( Math.PI/2 );

		if( !rotations )
			rotations = 4;

		rotations--;
	},

	actualPosition: function ( boat )
	{
		switch( rotations )
		{
			case 1: rotateRight( boat ) break;
			case 2: rotateRight( boat ) rotateRight( boat ) break;
			case 3: rotateLeft( boat ) break;
		}
	}
};
