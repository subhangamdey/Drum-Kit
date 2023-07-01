$(document).keypress(function(event){

    var pressedKey = event.key;
    
    switch(pressedKey){

        case "w":
            $(".w").addClass("pressed");
            var audio =  new Audio('sounds/tom-1.mp3');
            audio.play();
            setTimeout(function(){

               $(".w").removeClass("pressed");

            },100)
            break;

        case "a":
            $(".a").addClass("pressed");
            var audio =  new Audio('sounds/tom-2.mp3');
            audio.play();
            setTimeout(function(){

                $(".a").removeClass("pressed");
 
             },100)
            break;

        case "s":
            $(".s").addClass("pressed");
            var audio =  new Audio('sounds/tom-3.mp3');
            audio.play();
            setTimeout(function(){

                $(".s").removeClass("pressed");
 
             },100)
            break;

        case "d":
            $(".d").addClass("pressed");
            var audio =  new Audio('sounds/tom-4.mp3');
            audio.play();
            setTimeout(function(){

                $(".d").removeClass("pressed");
 
             },100)
            break;

        case "j":
            $(".j").addClass("pressed");
            var audio =  new Audio('sounds/crash.mp3');
            audio.play();
            setTimeout(function(){

                $(".j").removeClass("pressed");
 
             },100)
            break;

        case "k":
            $(".k").addClass("pressed");
            var audio =  new Audio('sounds/kick-bass.mp3');
            audio.play();
            setTimeout(function(){

                $(".k").removeClass("pressed");
 
             },100)
            break;

        case "l":
            $(".l").addClass("pressed");
            var audio =  new Audio('sounds/snare.mp3');
            audio.play();
            setTimeout(function(){

                $(".l").removeClass("pressed");
 
             },100)
            break;

        default:
            alert("Please press valid key!!");
            break;

    }   

})

$(".drum").click(function(){

    animateButton(this.innerHTML);
    
})

function animateButton(a){

    switch(a){

        case "w":
            $(".w").addClass("pressed");
            var audio =  new Audio('sounds/tom-1.mp3');
            audio.play();
            setTimeout(function(){

               $(".w").removeClass("pressed");

            },100)
            break;

        case "a":
            $(".a").addClass("pressed");
            var audio =  new Audio('sounds/tom-2.mp3');
            audio.play();
            setTimeout(function(){

                $(".a").removeClass("pressed");
 
             },100)
            break;

        case "s":
            $(".s").addClass("pressed");
            var audio =  new Audio('sounds/tom-3.mp3');
            audio.play();
            setTimeout(function(){

                $(".s").removeClass("pressed");
 
             },100)
            break;

        case "d":
            $(".d").addClass("pressed");
            var audio =  new Audio('sounds/tom-4.mp3');
            audio.play();
            setTimeout(function(){

                $(".d").removeClass("pressed");
 
             },100)
            break;

        case "j":
            $(".j").addClass("pressed");
            var audio =  new Audio('sounds/crash.mp3');
            audio.play();
            setTimeout(function(){

                $(".j").removeClass("pressed");
 
             },100)
            break;

        case "k":
            $(".k").addClass("pressed");
            var audio =  new Audio('sounds/kick-bass.mp3');
            audio.play();
            setTimeout(function(){

                $(".k").removeClass("pressed");
 
             },100)
            break;

        case "l":
            $(".l").addClass("pressed");
            var audio =  new Audio('sounds/snare.mp3');
            audio.play();
            setTimeout(function(){

                $(".l").removeClass("pressed");
 
             },100)
            break;

        default:
            alert("Please press valid key!!");
            break;

    } 
    
}