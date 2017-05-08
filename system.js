// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
const system = require( 'system' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var args = system.args;
var env = system.env;
var os = system.os;
var pid = system.pid;
var platform = system.platform;

// --------------------------------------------------
// INIT
// --------------------------------------------------
// Log out arguments array.
// - First argument is always the name of the executing script (ie. 'system.js').
// - Remaining arguments are read in from the command line.
console.log( args );

// Log out key/value environment variables (PATH, SHELL, etc.).
for ( var key in env ) {
	console.log( key );
	console.log( env[ key ] );
}

// Log out key/value hardware/device variables (architecture, name, etc.).
for ( var key in os ) {
	console.log( key );
	console.log( os[ key ] );
}

// Log out process ID.
console.log( pid );

// Log out `platform` (ie. 'phantomjs').
console.log( platform );

// --------------------------------------------------
// EXIT PROCESS
// --------------------------------------------------
phantom.exit();
