function Boat( x, z, size, direction, name )
{
	this.x = x;
	this.z = z;
	this.size = size;
	this.life = size;
	this.direction = direction;
	this.name = name;
};

Boat.prototype.GetEsential = function()
{
	return { x: this.x, z: this.z, size: this.size, direction: this.direction };
};

Boat.prototype.SetDamage = function()
{
	this.size -= 1;
};

Boat.prototype.GetPositionFront = function()
{
	var x = this.x, z = this.z

	if ( this.direction = "dreta" )
		
		x = x + ( this.size - 1 ) * 50;
	
	else if ( this.direction = "amunt" )
		
		z = z + ( this.size - 1 ) * 50;

	return { x: x, y: y }
}

Boat.prototype.GetInformation = function()
{
	return "Coordinates, x: " + this.x + " z: " + this.z + ". \nSize of the boat: " + this.size 
			+ ". \nLife of the boat: " + this.life + ". \nDirection of the boat: " + this.direction;
};