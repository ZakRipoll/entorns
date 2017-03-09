function Player( name, avatar )
{
  this.name = name;
  this.avatar = avatar;

  this.boats = [];
  this.board = [];

  this.maxBoats = 7;

  this.actualBoat = -1;
  this.actual = null;

  this.lenght = 0;
  this.rotation = 0;
  this.positionate = 0;

  this.loadBoard();
  this.loadBoats();
  this.incrementActualBoat();
};

Player.prototype.loadBoats = function()
{
  factory.createBoat( 'imatges/boat.obj', "Boat", this );
};

Player.prototype.incrementActualBoat = function()
{
    this.actualBoat++;

    //this.actualBoat %= this.maxBoats;

    this.actual = this.boats[ this.actualBoat ];
};

Player.prototype.loadBoard = function()
{
  for( var i = 0; i < 10; ++i )

    this.board[ i ] = [];
};

Player.prototype.boardPosition = function( tiro )
{
  var x = tiro[ 1 ], z = tiro[ 0 ]

  switch ( this.rotation )
  {
    case 0:

      for( var i = 0; i < 3; ++i )
      {
        this.board[ x ][ z ] = 'x';
        z--;
      }

    break;

    case 1:
      for( var i = 0; i < 3; ++i )
      {
        this.board[ x ][ z ] = 'x';
        x--;
      }

    break;

    case 2:

      for( var i = 0; i < 3; ++i )
      {
        this.board[ x ][ z ] = 'x';
        z++;
      }

    break;

    case 3:
      for( var i = 0; i < 3; ++i )
      {
        this.board[ x ][ z ] = 'x';
        x++;
      }

    break;
  }
};

Player.prototype.detectShoot = function( tiro )
{
  tiro = shoot.worldToBoard( tiro[ 0 ], tiro[ 1 ] );

  return this.board[ tiro[ 0 ] ][ tiro[ 1 ] ] == 'x';
};

Player.prototype.maximumBoats = function ()
{
  return this.actualBoat == this.maxBoats;
};

Player.prototype.newRotation = function()
{
  this.rotation++;
  this.rotation %= 4;
};
