var i = 0;
var correctCount = 0 ;
//initialize the first question
generate(0);
// generate from json array data with index
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
}

function checkAnswer() {
    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
       correctCount++;
    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;
    }
    
    i++;
    if(jsonData.length-1 < i){

        document.write("<body style='background-color:wheat;'>");
        document.write("<div style='color:black;font-size:18pt;text-align:center;margin-top:200px'>Your score is : "+correctCount+"/5</div>");
        document.write("</body>");
    }
    generate(i);
}