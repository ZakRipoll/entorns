function Boat( x, z, size, name, object )
{
	this.x = x;
	this.z = z;
	this.size = size;
	this.life = size;
	this.name = name;
	this.object = objectl
	this.direction = 0;
};

/* ******************************************* ESENTIAL TO POSITIONATE THE BOAT ******************************************* */
Boat.prototype.getEsential = function()
{
	return { x: this.x, z: this.z, size: this.size, direction: this.direction };
};

/* ****************************************************** CHECK LIFE ****************************************************** */
Boat.prototype.isDead = function()
{
	return this.life == 0;
};

/* ************************************************ SET DAMAGE TO THE BOAT ************************************************ */
Boat.prototype.setDamage = function()
{
	if( !this.isDead )

		this.life--;
};

/* ******************************************************** ROTATE ******************************************************** */
Boat.prototype.getPositionFront = function()
{
	var x = this.x, z = this.z

	switch ( this.direction )
	{
		case 0:

			z = z + ( this.size - 1 ) * 50;

		break;

		case 1:

			z = z + ( this.size - 1 ) * 50;

		break;

		case 2:

			z = z + ( this.size - 1 ) * 50;

		break;

		case 3:

			x = x + ( this.size - 1 ) * 50;

		break;
	}

	return { x: x, y: y }
};

/* ******************************************************* ROTATIONS ******************************************************* */

Boat.prototype.giraDreta = function ()
{
	this.object.rotateY( -Math.PI/2 );

	rotations++;
	rotations%=4;
},

Boat.prototype.gireEsquerra = function ()
{
	this.object.rotateY( Math.PI/2 );

	if( !rotations )
		rotations = 4;

	rotations--;
},

Boat.prototype.rotateRight = function ( boat )
{
	this.object.rotateY( -Math.PI*.5 );
},

Boat.prototype.rotateLeft = function ( boat )
{
	this.object.rotateY( Math.PI*.5 );
},

Boat.prototype.actualPosition = function ( boat )
{
	switch( rotations )
	{
		case 1: this.rotateRight( boat ); break;
		case 2: this.rotateRight( boat ); this.rotateRight( boat ); break;
		case 3: this.rotateLeft( boat ); break;
	};
}

/* ************************************************** GENERAL INFORMATION ************************************************** */
Boat.prototype.getInformation = function()
{
	return "Coordinates, x: " + this.x + " z: " + this.z + ". \nSize of the boat: " + this.size
			+ ". \nLife of the boat: " + this.life + ". \nDirection of the boat: " + this.direction;
};
