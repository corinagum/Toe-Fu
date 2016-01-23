// class constructor
// Boot class is responsible for pre-loading assets
// and switching to the game state

ToeFu.Boot = function() {

};

ToeFu.Boot.prototype.preload = function() {
  // preload all assets
  //autoload each asset by type
    Object.keys(ToeFu.ASSETS).forEach(function(type){
    for( var asset in ToeFu.ASSETS[type] ){
      ToeFu.game.load[ type.toLowerCase() ](
        ToeFu.ASSETS[type][ asset ].name,
        ToeFu.ASSETS[type][ asset ].path,
        ToeFu.ASSETS[type][ asset ].width,
        ToeFu.ASSETS[type][ asset ].height,
        ToeFu.ASSETS[type][ asset ].frames
      );
    }
  });
}; // close line 9: ToeFu.Boot.prototype.preload = function etc.

ToeFu.Boot.prototype.create = function() {
  // switch to game state
  this.state.start( ToeFu.STATES.GAME );
};