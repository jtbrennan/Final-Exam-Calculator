function calculate() { 
  var currentGrade = document.getElementById("currentGrade").value;
  var examWorth = document.getElementById("examWorth").value;
  var potentialGrade = document.getElementById("potentialGrade").value;

  
  if (currentGrade.length > 0 && examWorth.length > 0 && potentialGrade.length > 0) {
    if (!isNaN(currentGrade) && !isNaN(examWorth) && !isNaN(potentialGrade)) {

      var percent = examWorth * 0.01;
      var termGrade = currentGrade * (1-percent);
      var potential = potentialGrade - termGrade
      
      var answer = (potential * 100) / (percent * 100)
      
      document.getElementById('displayAnswer').innerHTML = '';
      var paragraph = document.getElementById("displayAnswer");
      var text = document.createTextNode("You will need to score at least " + Math.round(answer) + "%" + " on your final to get a " + potentialGrade + "%"+" overall");
      paragraph.appendChild(text);

      
    } else {
      alert("Invalid Input")
    }
  } else {
    alert("Invalid Input")
  }
  
}