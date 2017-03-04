var utils = 
{
	max: function( x, y, z )
	{
		x = Math.abs( x );
		y = Math.abs( y );
		z = Math.abs( z );

		var max = x;

		if ( y > max )

			max = y;

		if ( z > max )

			max = z;

		return max;
	},

	speed: function( distance )
	{
		return distance*.0001;
	}
};

