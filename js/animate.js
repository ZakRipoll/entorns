var animate  = {
/* ******************************************************** CRATESEA ******************************************************** */
	createSea: function( delta )
	{
		for (var i = 0; i < geometry.vertices.length; i++)

			geometry.vertices[i].z = Math.sin( i + delta * .02 ) * deep;

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		geometry.colorsNeedUpdate = geometry.elementsNeedUpdate = geometry.verticesNeedUpdate = true;
	}
};
