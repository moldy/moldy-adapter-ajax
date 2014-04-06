var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'create', function () {

	it( 'should `create` by a property', function ( _done ) {
		var personMoldy = new Moldy( 'person', {
			key: 'hash',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personMoldy.name = 'David';

		personMoldy.$save( function ( _error ) {

			personMoldy.name.should.eql( 'David' );
			_done( _error );

		} );
	} );

} );