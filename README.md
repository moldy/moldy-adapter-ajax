# TOC
   - [sg-model-adapter-ajax](#sg-model-adapter-ajax)
     - [get](#sg-model-adapter-ajax-get)
<a name=""></a>
 
<a name="sg-model-adapter-ajax"></a>
# sg-model-adapter-ajax
Tell the `Model` to use the `ajax` adapter.

```js
Model.use( 'adapter', sgModelAdapterAjax );
```

<a name="sg-model-adapter-ajax-get"></a>
## get
should `get` by a property.

```js
var personModel = new Model( 'person', {
	key: 'guid',
	baseUrl: 'http://localhost:3000/api',
	properties: {
		name: '',
		age: ''
	}
} );
personModel.$get( {
	guid: '5f55821f-3a28-45c3-b91d-7df927a863d8'
}, function ( _error, _bennett ) {
	if ( _error ) {
		return _done( _error );
	}
	_bennett.name.should.eql( 'Bennett Sanchez' );
	_done();
} );
```

