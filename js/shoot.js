var shoot =
{
  isShoot: function( x, z )
  {
    if( x.length == 2 )
    {
      z = x[1];
      x = x[0];
    }
    return -450 <= x && x <= 450 && -450 <= z && z <= 450;
  },

  toNumber: function( x )
  {
    return x.toUpperCase().charCodeAt(0) - 65;
  },

  toLetter: function( x )
  {
    return String.fromCharCode( 65 + x )
  },

  toBoard: function( x )
  {
    return parseInt( x * .01 + 5 );
  },

  toWorld: function( x )
  {
    return x * 100 - 450;
  },

  worldToBoard: function( x, z )
  {
    return [ this.toBoard( x ), this.toBoard( z ) ];
  },

  boardToWorld: function( x, z )
  {
    return [ this.toWorld( x ), this.toWorld( z ) ]
  },

  boardToGame: function( x, z )
  {
    return [ this.toLetter( x ), ++z ];
  },

  gameToBoard: function( x, z )
  {
    return [ this.toNumber( x ), --z ];
  },

  worldToGame: function( x, z )
  {
    return this.boardToGame( this.toBoard( x ), this.toBoard( z ) );
  },

  gameToWorld: function( x, z )
  {
    var tiro = this.gameToBoard( x, z );
    return this.boardToWorld( tiro[ 0 ], tiro[ 1 ] );
  },

  printShoot: function( x, z )
  {
    var missatge = this.worldToGame( x, z );
    return missatge[0] + "" + missatge[1];
  },

  printGame: function( x, y )
  {
    return x.toUpperCase() + "" + y;
  },

  oneShoot: function( x, z )
  {
    var acert =  player.detectShoot( [ x, z ] );
    var nombre = !isNaN( acert );

    destroy.add( debug.createCubeRay( z, 1, x, nombre ) );

    if( nombre )
    {
      player.boats[ acert ].setDamage();

       if( player.boats[ acert ].isDead() )
       {
         player.deadBoats++;

         return true;
       }
    }
    return false;
  },
};
