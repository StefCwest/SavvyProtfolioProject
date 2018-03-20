var story = {
    "start": "You walk down a dark road and come to a fork, Do you go left or right?",
    "left": "You approah a talking alleycat, who wants to hangout, Do you hangout or decline?",
    "hangout": "You get wasted and die of alchohol poisoning, end story",
    "decline": "You fall asleep in the back of a bar and wake up with a splitting headache and slight amnesia, end story",
    "right": "You approach a blind mouse who needs your help, Do you help him or proceed?",
    "help": "He gives you the winning lottery ticket, and you marry your ideal mate and live happily ever after, end story",
    "proceed": "You die from guilt from not helping the blind mouse",


};

var choice = prompt( story.start );

if( choice === "left"  ){
    choice = prompt( story.left );
}
if( choice === "right" ){
    choice = prompt( story.right );
}
if( choice === "follow" ){
    choice =  prompt( story.follow );
}
if
( choice === "proceed" ){
    choice = prompt( story.proceed );
}
if( choice === "help" ){
    choice = prompt( story.help );
}
if( choice === "hangout" ){
    choice = prompt( story.hangout );
}
else{
    choice =  prompt( "you didnt choose a real option!" );
}
if( choice === "decline" ){
    choice = prompt( story.decline );
}
else{
    choice = alert( "you didn't choose a real option!" );
}
