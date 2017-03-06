function Boat( x, z, size, name, object )
{
	this.x = x;
	this.z = z;
	this.size = size;
	this.life = size;
	this.name = name;
	this.object = object;
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

		this.life -= 1;
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
Boat.prototype.rotateRight = function()
{
	this.object.rotateY( -Math.PI/2 )

	this.direction++;
	this.direction%=4;
};

Boat.prototype.rotateLeft = function()
{
	this.object.rotateY( Math.PI/2 )

	if( !this.direction )

		this.direction = 4;

	this.direction--;
};

/* ************************************************** GENERAL INFORMATION ************************************************** */
Boat.prototype.getInformation = function()
{
	return "Coordinates, x: " + this.x + " z: " + this.z + ". \nSize of the boat: " + this.size
			+ ". \nLife of the boat: " + this.life + ". \nDirection of the boat: " + this.direction;
};
