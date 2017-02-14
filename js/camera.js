function camera( angle, aspect, near, far ) 
{
	this.aspect = aspect;
	this.angle = angle;
	this.near = near;
	this.far = far;
	this.x;
	this.y;
	this.z;
	
	function createCamera(  )
	{
		return new THREE.PerspectiveCamera( angle, aspect, near, far );
	};

	function createCamera( angle, width, height, near, far )
	{
		return new THREE.PerspectiveCamera( angle, width / height, near, far );
	};

	this.viewSet = function( position )
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
};