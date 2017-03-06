var message =
{
  alocateCube: function( x, z )
  {
    x = x.toLowerCase().charCodeAt(0) - 97 * 50 - 450;
    z = z-- * 50 - 450;
    scene.add( debug.createCubeRay( x, 50, z ) );
  }
}
