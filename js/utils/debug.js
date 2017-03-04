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
	}
};