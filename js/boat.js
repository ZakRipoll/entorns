function Boat( object, size, name, dimentions, id )
{
	this.object = object;
	this.rotation = 0;
	this.dimentions = dimentions;
	this.lenght = dimentions.x * .25;
	this.size = size;
	this.life = size;
	this.name = name;
	this.id = id;
	this.x;
	this.z;
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
	if( !this.isDead() )

		this.life--;
};

/* ************************************************** GENERAL INFORMATION ************************************************** */
Boat.prototype.getInformation = function()
{
	return "Coordinates, x: " + this.x + " z: " + this.z + ". \nSize of the boat: " + this.size
			+ ". \nLife of the boat: " + this.life + ". \nDirection of the boat: " + this.direction;
};
