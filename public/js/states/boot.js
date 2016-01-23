// class constructor
// Boot class is responsible for pre-loading assets
// and switching to the game state

ToeFu.Boot = function() {

};

ToeFu.Boot.prototype.preload = function() {
  // preload all assets
};

ToeFu.Boot.prototype.create = function() {
  // switch to game state
  this.state.start( ToeFu.STATES.GAME );
};