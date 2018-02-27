var sok = Math.floor((Math.random()*20));
var attempts = 0;
var output = "Not set"

function numberSeek(){
    var tal = document.getElementById("input").value;
    attempts++;
    if (tal > sok) {
        output = "För högt";
        
    } 
    else if (tal < sok) {
        output = "För lågt";
        
    } 
    else {
        output = "Rätt Svar på "+ attempts +" försök";
        attempts = 0;
    }
    console.log(output);
    document.getElementById("output").innerHTML = output;
}
/*
    numberToLookFor.apply(null,[1,2,3])
*/
function numberToLookFor(){
    for (var i = 0; i < arguments.length;i++){
        console.log("Trying: " + arguments[i]);
        if(arguments[i] > sok) {
            output = "För högt";
        } 
        else if (arguments[i] < sok) {
            output = "För lågt";    
        } 
        else {
            output = "Rätt Svar";
        }
        console.log(arguments[i] + " är "+ output);
    }
}