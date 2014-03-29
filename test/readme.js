var Model = require( 'sg-model' ),
	should = require( 'should' ),
	sgModelAdapterAjax = require( '../src' );

Model.useify.clear();
Model.use( 'adapter', require( '../src' ) );

describe( 'sg-model-adapter-ajax', function () {

	it( 'Tell the `Model` to use the `ajax` adapter', function () {
		// Model.use( 'adapter', sgModelAdapterAjax );
	} );

	require( './readme.create' );
	require( './readme.get' );
	require( './readme.collection' );
	require( './readme.save' );
	require( './readme.delete' );

} );