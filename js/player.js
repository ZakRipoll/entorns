function Player( name, avatar )
{
  this.name = name;
  this.avatar = avatar;
  this.board = [];
  this.boats = new Array();
  this.actual = null;
  this.maxBoats = 8;

  this.loadBoard();
};

Player.prototype.loadBoats = function()
{
  factory.createBoat( 'imatges/boat.obj', "Boat", this, 4 );
};

Player.prototype.loadBoard = function()
{
  for( var i = 0; i < 10; ++i )
  {
    this.board[ i ] = [];

    for( var j = 0; j < 10; ++j )
    {
      this.board[ i ][ j ] = "";
    }
  }
};

Player.prototype.detectShoot = function( tiro )
{
  tiro = shoot.worldToBoard( tiro[ 0 ], tiro[ 1 ] );

  return this.board[ tiro[ 0 ] ][ tiro[ 1 ] ] == 'x';
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

      if ( z < this.actual.size - 1 )
      {
        z = this.actual.size - 1;
      }

      for( var i = 0; i < this.actual.size; ++i )
      {
        this.board[ x ][ z ] = 'x';
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
        this.board[ x ][ z ] = 'x';
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
        this.board[ x ][ z ] = 'x';
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
        this.board[ x ][ z ] = 'x';
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
        if( this.board[ x ][ z ] == 'x' )
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
        if( this.board[ x ][ z ] == 'x' )
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
        if( this.board[ x ][ z ] == 'x' )
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
        if( this.board[ x ][ z ] == 'x' )
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
  this.actual.rotation %= 4;
};
