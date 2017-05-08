// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
const system = require( 'system' );
const webpage = require( 'webpage' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var page = webpage.create();
var url = null;

// --------------------------------------------------
// INIT
// --------------------------------------------------
if ( system.args.length === 1 ) {
	-
	console.log( 'Whoops! This script requires a URL argument.' );
	console.log( 'For example: ' + system.platform + ' ' + system.args[ 0 ] + ' http://www.google.ca/' );
	phantom.exit();

} else {
	url = system.args[ 1 ];

	page.open( url, function( status ) {
		if ( status !== 'success' ) {
			console.log( 'Whoops, looks like the following URL is invalid:', url );
		} else {
			console.log( 'Success! Opened URL:', url );
		}

		phantom.exit();
	} );
}
