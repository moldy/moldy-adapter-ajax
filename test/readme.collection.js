var Model = require( 'sg-model' ),
	should = require( 'should' );

describe( 'collection', function () {

	it( 'should `get` a `collection`', function ( _done ) {
		var personModel = new Model( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personModel.$collection( function ( _error, _people ) {

			if ( _error ) {
				return _done( _error );
			}

			_people.should.be.an.Array;
			_people.should.have.a.lengthOf( 3 );

			_people.forEach( function ( _person ) {
				_person.should.be.a.Model;
				_person.should.have.a.property( 'guid' );
				_person.should.have.a.property( 'name' );
				_person.should.have.a.property( 'age' );
				Object.keys( _person.$json() ).should.have.a.lengthOf( 3 );
				console.log( _person.$json() );
				console.log( '----------------' );
			} );

			_done();

		} );
	} );

} );