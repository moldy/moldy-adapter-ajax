var Moldy = require( 'moldy' ),
	should = require( 'should' );

Moldy.use( require( '../src' ) );

describe( 'model-ajax-adapter', function () {

	it( 'Tell the `Moldy` to use the `ajax` adapter', function () {
		// Moldy.use( require('moldy-ajax-adapter') );
	} );

	require( './readme/create' );
	require( './readme/get' );
	require( './readme/collection' );
	require( './readme/save' );
	require( './readme/destroy' );

} );