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

		scene.add( cube );
	},

	/* ******************************************************* ROTATIONS ******************************************************* */

	giraDreta: function ()
	{
		actual.rotateY( -Math.PI/2 );

		rotations++;
		rotations%=4;
	},

	gireEsquerra: function ()
	{
		actual.rotateY( Math.PI/2 );

		if( !rotations )
			rotations = 4;

		rotations--;
	},

	rotateRight: function ( boat )
	{
		boat.rotateY( -Math.PI/2 );
	},

	rotateLeft: function ( boat )
	{
		boat.rotateY( Math.PI/2 );
	},

	actualPosition: function ( boat )
	{
		switch( rotations )
		{
			case 1: this.rotateRight( boat ); break;
			case 2: this.rotateRight( boat ); this.rotateRight( boat ); break;
			case 3: this.rotateLeft( boat ); break;
		};
	}
};
