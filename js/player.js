function Player( name, avatar )
{
  this.name = name;
  this.avatar = avatar;
  this.board = [];

  this.boats = new Array();
  this.actual = null;
  this.maxBoats = 11;
  this.deadBoats = 0;

  this.loadBoard();
};

Player.prototype.isWater = function( x, y )
{
  return this.board[x][y] != "a";
};

Player.prototype.loadBoats = function()
{
  var size;

  switch (  this.boats.length )
  {
    case 0:
      size = 5;
    break;

    case 1:
    case 2:
      size = 4
    break;

    case 3:
    case 4:
    case 5:
      size = 3;
    break;

    default:
      size = 2;
  }

  factory.createBoat( 'imatges/boat.obj', "Boat", this, size, this.boats.length );

  if( this.maximumBoats() )
  {
    this.actual = null;
  }
};

Player.prototype.loadBoard = function()
{
  for( var i = 0; i < 10; ++i )
  {
    this.board[ i ] = [];

    for( var j = 0; j < 10; ++j )
    {
      this.board[ i ][ j ] = "a";
    }
  }
};

Player.prototype.detectShoot = function( tiro )
{
  tiro = shoot.worldToBoard( tiro[ 0 ], tiro[ 1 ] );

  return this.board[ tiro[ 0 ] ][ tiro[ 1 ] ];
};

Player.prototype.maximumBoats = function ()
{
  return this.boats.length == this.maxBoats;
};

/* ****************************************************** PER LA CLASSE BOAT ****************************************************** */
Player.prototype.boardPosition = function( tiro )
{
  var x = tiro[ 1 ], z = tiro[ 0 ]

  switch ( this.actual.rotation )
  {
    case 0:

      if ( z < this.actual.size )
      {
        z = this.actual.size;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        this.board[ x ][ z ] = this.actual.id;
        z--;
      }

    break;

    case 1:

      if ( x < this.actual.size )
      {
        x = this.actual.size;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        this.board[ x ][ z ] = this.actual.id;
        x--;
      }

    break;

    case 2:

      if ( z > 10 - this.actual.size )
      {
        z = 10 - this.actual.size
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        this.board[ x ][ z ] = this.actual.id;
        z++;
      }

    break;

    case 3:

      if ( x > 10 - this.actual.size )
      {
        x = 10 - this.actual.size;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        this.board[ x ][ z ] = this.actual.id;
        x++;
      }

    break;
  }
};

Player.prototype.alocateBoard = function( tiro )
{
  var x = tiro[ 1 ], z = tiro[ 0 ];

  switch ( this.actual.rotation )
  {
    case 0:

      if ( z < this.actual.size - 1 )
      {
        z = this.actual.size - 1;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        if( this.board[ x ][ z ] != "a" )
        {
          return false;
        }
        z--;
      }

    break;

    case 1:

      if ( x < this.actual.size - 1 )
      {
        x = this.actual.size - 1;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        if( this.board[ x ][ z ] != "a" )
        {
          return false;
        }
        x--;
      }

    break;

    case 2:

      if ( x > 10 - this.actual.size )
      {
        x = 10 - this.actual.size;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        if( this.board[ x ][ z ] != "a" )
        {
          return false;
        }
        z++;
      }

    break;

    case 3:

      if ( x > 10 - this.actual.size )
      {
        x = 10 - this.actual.size;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        if( this.board[ x ][ z ] != "a" )
        {
          return false;
        }
        x++;
      }

    break;
  }

  return true;
};

Player.prototype.newRotation = function()
{
  this.actual.rotation++;
  this.actual.rotation%=4;
};

Player.prototype.allDeath = function()
{
  return this.deadBoats == this.maximumBoats;
}
