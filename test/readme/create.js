var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'create', function () {

	it( 'should `create` by a property', function ( _done ) {
		var personMoldy = Moldy.extend( 'person', {
			key: 'hash',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} ).create();

		personMoldy.name = 'David';

		personMoldy.$save( function ( _error ) {

			personMoldy.name.should.eql( 'David' );
			_done( _error );

		} );
	} );

} );