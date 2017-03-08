function Player( name, avatar )
{
  this.name = name;
  this.avatar = avatar;

  this.boats = [];
  this.board = [];

  this.maxBoats = 7;

  this.actualBoat = -1;
  this.actual = null;

  this.loadBoard();
  this.loadBoats();
  this.incrementActualBoat();
};

Player.prototype.loadBoats = function()
{
    this.boats.push( factory.createBoat( 'imatges/boat.obj', "Boat" ) );
};

Player.prototype.incrementActualBoat = function()
{
    this.actualBoat++;

    this.actualBoat %= this.maxBoats;

    this.actual = this.boats[ this.actualBoat ];
};

Player.prototype.loadBoard = function()
{
  for( var i = 0; i < 10; ++i )
  {
    this.board[ i ] = [];
  }
};

Player.prototype.boardPosition = function( tiro )
{
  this.board[ tiro[ 1 ] ][ tiro[ 0 ] ] = 'x';
};

Player.prototype.detectShoot = function( tiro )
{
  tiro = shoot.worldToBoard( tiro[ 0 ], tiro[ 1 ] );

  return this.board[ tiro[ 0 ] ][ tiro[ 1 ] ] == 'x';
};
