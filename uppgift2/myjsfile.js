
var sok = 8;
var output = "Not set"
function numberSeek(){
    var tal = document.getElementById("input").value;
    if (tal > sok) {
        output = "För högt";
    } 
    else if (tal < sok) {
        output = "För lågt";
    } 
    else {
        output = "Rätt Svar";
    }
console.log(output);
document.getElementById("output").innerHTML = output;
}
