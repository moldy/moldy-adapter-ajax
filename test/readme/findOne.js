var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'findOne', function () {
	
	it( 'should `findOne` by a property', function ( _done ) {
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
	
			_person.name.should.eql( 'Bennett Sanchez' );
			_done( _error );
	
		} );
	} );
	
	

	it('should handle not found items', function (_done) {
		
		var personMoldy = Moldy.extend( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );
	
		personMoldy.$findOne( {
			guid: 'non-existant-id'
		}, function ( _error, _person ) {
	
			should.not.exist(_error);
			should(_person).eql(undefined);
			_done( _error );
	
		} );

	});

} );