var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'destroy', function () {

	it( 'should `destroy` a model', function ( _done ) {
		var personMoldy = Moldy.extend( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personMoldy.$findOne( {
			guid: '5f55821f-3a28-45c3-b91d-7df927a863d8'
		}, function ( _error, _person ) {

			if ( _error ) {
				return _done( _error );
			}

			_person.$destroy( _done );

		} );
	} );

} );