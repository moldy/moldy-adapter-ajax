# TOC
   - [model-ajax-adapter](#model-ajax-adapter)
     - [create](#model-ajax-adapter-create)
     - [findOne](#model-ajax-adapter-findone)
     - [find](#model-ajax-adapter-find)
     - [save](#model-ajax-adapter-save)
     - [destroy](#model-ajax-adapter-destroy)
<a name=""></a>
 
<a name="model-ajax-adapter"></a>
# model-ajax-adapter
Tell the `Moldy` to use the `ajax` adapter.

```js
// Moldy.use( require('moldy-ajax-adapter') );
```

<a name="model-ajax-adapter-create"></a>
## create
should `create` by a property.

```js
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
```

<a name="model-ajax-adapter-findone"></a>
## findOne
should `findOne` by a property.

```js
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
```

<a name="model-ajax-adapter-find"></a>
## find
should `find`.

```js
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
```

<a name="model-ajax-adapter-save"></a>
## save
should `save` a model.

```js
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
	_person.name = 'Mr Bennett Sanchez';
	_person.$save( _done );
} );
```

<a name="model-ajax-adapter-destroy"></a>
## destroy
should `destroy` a model.

```js
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
```

