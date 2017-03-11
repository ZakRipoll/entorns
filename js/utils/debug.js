var debug =
{
	dimention : 100,

	objectPosition: function ( object )
	{
		console.log( object.position.x + ", " + object.position.y + ", " + object.position.z )
	},

	createCube: function ( hit )
	{
		return new THREE.Mesh( 	new THREE.CubeGeometry( this.dimention, 1, this.dimention  ),
								hit ? new THREE.MeshLambertMaterial({color: 0x990000}) :  new THREE.MeshNormalMaterial() );
	},

	createCubeRay: function ( x, y, z, hit )
	{
		var cube = this.createCube( hit );

		cube.position.set( x, y, z );

		return cube;
	}
};
