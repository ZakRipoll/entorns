var message =
{
  shoot: function( x, z )
  {
    x = ( x.toLowerCase().charCodeAt(0) - 97 ) * 100 - 450;
    z = --z * 100 - 450;
    console.log( x + ", " + z);
    scene.add( debug.createCubeRay( x, 50, z, 1, 4 ) );
  }
}
