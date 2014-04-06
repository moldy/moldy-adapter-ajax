var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'get', function () {

	it( 'should `get` by a property', function ( _done ) {
		var personMoldy = new Moldy( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personMoldy.$get( {
			guid: '5f55821f-3a28-45c3-b91d-7df927a863d8'
		}, function ( _error ) {

			personMoldy.name.should.eql( 'Bennett Sanchez' );
			_done( _error );

		} );
	} );

} );