var Model = require( 'moldy' ),
	should = require( 'should' );

describe( 'create', function () {

	it( 'should `create` by a property', function ( _done ) {
		var personModel = new Model( 'person', {
			key: 'hash',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personModel.name = 'David';

		personModel.$save( function ( _error, _david ) {

			if ( _error ) {
				return _done( _error );
			}

			_david.name.should.eql( 'David' );
			_done();

		} );
	} );

} );