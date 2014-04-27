var Moldy = require( 'moldy' ),
	should = require( 'should' );

describe( 'find', function () {

	it( 'should `find`', function ( _done ) {
		var personMoldy = Moldy.extend( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personMoldy.$find( function ( _error, _people ) {

			_people.should.be.an.Array;
			_people.should.have.a.lengthOf( 3 );

			_people.forEach( function ( _person ) {
				_person.should.be.a.Moldy;
				_person.should.have.a.property( 'guid' );
				_person.should.have.a.property( 'name' );
				_person.should.have.a.property( 'age' );
				Object.keys( _person.$json() ).should.have.a.lengthOf( 3 );
			} );

			_done( _error );

		} );
	} );

} );