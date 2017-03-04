var createOBJ = 
{
	createBoat: function()
	{
		
		var loader = new THREE.OBJLoader( );
		loader.load( 'imatges/boat.obj', function ( object ) 
		{
			object.name = "Boat";
			scene.add( object );
		});
	}
};