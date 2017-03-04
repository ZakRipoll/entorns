function tauler()
{
	var dimension = 10;
	var tauler = new Array( this.dimension );

	function initTauler()
	{
		for( var i = 0; i < this.dimension; i++ )
			tauler[i] = new Array( this.dimension )
	};

	this.fill = function()
	{
		for( var i = 0; i < this.dimension; i++ )
			for( var j = 0; j < this.dimension; j++ )
				tauler[i][j] = i+1*j;
	};

	this.print = function()
	{
		for( var i = 0; i < this.dimension; i++ )
			for( var j = 0; j < this.dimension; j++ )
				tauler[i][j] = i+1*j;
	}
};