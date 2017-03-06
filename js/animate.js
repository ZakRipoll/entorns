var animate  = {
/* ******************************************************** CRATESEA ******************************************************** */
	createSea: function( delta )
	{
		for (var i = 0; i < geometry.vertices.length; i++)
		{
			var onada = Math.sin( i + delta * .1 ) * deep;

			geometry.vertices[i].z = onada;

			if( onada < -deep *.5 ) geometry.faces[ i ].color.setHex( seaColors.ligher );
			else if( onada < 0 ) geometry.faces[ i ].color.setHex( seaColors.original );
			else if( onada < deep *.5 ) geometry.faces[ i ].color.setHex( seaColors.darker );
			else geometry.faces[ i ].color.setHex( seaColors.grayscale );
		}

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		geometry.colorsNeedUpdate = geometry.elementsNeedUpdate = geometry.verticesNeedUpdate = true;
	}
};
