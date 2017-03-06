var message =
{
  shoot: function( x, z )
  {
    if ( isNaN( x ) )
    {
      x = ( x.toLowerCase().charCodeAt(0) - 97 ) * 100 - 450;
      z = --z * 100 - 450;
    }

    scene.add( debug.createCubeRay( z, 50, x, 1, 4 ) );
  }
}
