/* globals $ */
function greetUser(){
    var firstName = prompt( "What's your name?" );
    var $h1 = $( "h1" );
    var title = $h1.text();

    if( !firstName ){
        greetUser();
    }
    else{
        $h1.text( title + " " + firstName );
    }
}
document
    .querySelector( "#header" );
$( "h1" ).on( "click", greetUser );

// greetUser();
