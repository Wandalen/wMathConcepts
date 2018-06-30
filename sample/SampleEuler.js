if( typeof module !== 'undefined' )
require( 'wmathconcepts' );

var _ = wTools;


var matrix =  _.Space.make( [ 3, 3 ] ).copy(
     [ 0.2, 0.1, 0.5,
       0.1, 0.3, 0.1,
       0.7, 0, 0.2 ] );

var dstXYZ = [ 0, 0, 0, 0, 1, 2 ];
var dstXZY = [ 0, 0, 0, 0, 2, 1 ];
var dstYXZ = [ 0, 0, 0, 1, 0, 2 ];
var dstYZX = [ 0, 0, 0, 1, 2, 0 ];
var dstZXY = [ 0, 0, 0, 2, 0, 1 ];
var dstZYX = [ 0, 0, 0, 2, 1, 0 ];
var dstXYX = [ 0, 0, 0, 0, 1, 0 ];
var dstXZX = [ 0, 0, 0, 0, 2, 0 ];
var dstYXY = [ 0, 0, 0, 1, 0, 1 ];
var dstYZY = [ 0, 0, 0, 1, 2, 1 ];
var dstZXZ = [ 0, 0, 0, 2, 0, 2 ];
var dstZYZ = [ 0, 0, 0, 2, 1, 2 ];

var euler = [ 0.2, 0, 0, 2, 0, 2 ];
var mat = _.euler.toMatrix2( euler );
var euler2 = _.euler.fromMatrix2( mat, dstZXZ );
console.log( 'Euler from mat xyz:', euler2 );

var euler = [ 0.2, Math.PI, 0, 2, 0, 2 ];
var mat = _.euler.toMatrix2( euler );
var euler2 = _.euler.fromMatrix2( mat, dstZXZ );
console.log( 'Euler from mat xyz:', euler2 );
