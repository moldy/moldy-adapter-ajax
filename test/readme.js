var Model = require( 'moldy' ),
	should = require( 'should' );

Model.use( require( '../src' ) );

describe( 'sg-model-adapter-ajax', function () {

	it( 'Tell the `Model` to use the `ajax` adapter', function () {
		// Model.use( 'adapter', require('moldy-ajax-adapter') );
	} );

	require( './readme/create' );
	require( './readme/get' );
	require( './readme/collection' );
	require( './readme/save' );
	require( './readme/delete' );

} );