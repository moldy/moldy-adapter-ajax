/**
 * Module dependencies.
 */

var express = require( 'express' );
var http = require( 'http' );
var path = require( 'path' );

var app = express();

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'jade' );
app.use( express.favicon() );
app.use( express.logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded() );
app.use( express.methodOverride() );
app.use( app.router );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// development only
if ( 'development' == app.get( 'env' ) ) {
	app.use( express.errorHandler() );
}

var _ = require( 'underscore' ),
	guid = require( 'sc-guid' ),
	dummy = require( './test/dummy' );

app.get( '/api/person/:id', function ( _req, _res ) {
	var person = _.findWhere( dummy.data.people, {
		guid: _req.params.id
	} );
	_res.json( person );
} );

app.get( '/api/person', function ( _req, _res ) {
	_res.json( dummy.data.people );
} );

app.put( '/api/person/:id', function ( _req, _res ) {
	_res.json( _req.body );
} );

app.post( '/api/person', function ( _req, _res ) {
	_req.body.hash = guid.generate();
	console.log( _req.body );
	_res.json( _req.body );
} );

app.del( '/api/person/:id', function ( _req, _res ) {
	_res.json();
} );

http.createServer( app ).listen( app.get( 'port' ), function () {
	console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );