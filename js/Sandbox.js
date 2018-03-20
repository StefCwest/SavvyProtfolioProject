/* globals $*/
var css = {
    "background-color": "chartreuse",
    "position": "fixed",
    "top": 0
};

var animations = {
    "font-size": "500%",
    "top": "20vh" };


var $h2 = $( "<h2>" )
    .text( "Black Wallst Challenge" )
    .css( "position", "fixed " );

function animateH2(){
    $h2.animate( {
        "left": "100vw"
    } );
}

var animationOptions = {
    "duration": 5000,
    "complete": animateH2
};

var $h1 = $( "<h1>" )
    .text( "Self Ruler" )
    .animate( animations, animationOptions )
    .css( css );


$( "#output" )
    .append( $h1, $h2 );
