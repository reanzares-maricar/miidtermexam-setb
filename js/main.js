function EVALUATE() {
    var firstgrade = document.getElementById("inputmath").value;
    var firsttext = document.getElementById("sub1");

    if (firstgrade >=90 && firstgrade <=100){
        firsttext.innerHTML = "Outstanding";
    }
    else if (firstgrade >= 80 && firstgrade <= 89){
        firsttext.innerHTML = "Very Good";
    }
    else if (firstgrade >= 70 && firstgrade <= 79){
        firsttext.innerHTML = "Average";
    }
    else if (firstgrade >= 60 && firstgrade <= 69){
        firsttext.innerHTML = "Poor";
    }
    else if (firstgrade >= 0 && firstgrade <= 59){
        firsttext.innerHTML = "Failed";
    }
    else{
        firsttext.innerHTML = "You hit the limit";
    }

    var secondgrade = document.getElementById("inputscience").value;
    var secondtext = document.getElementById("sub2");

    if (secondgrade >=90 && secondgrade <=100){
        secondtext.innerHTML = "Outstanding";
    }
    else if (secondgrade >= 80 && secondgrade <= 89){
        secondtext.innerHTML = "Very Good";
    }
    else if (secondgrade >= 70 && secondgrade <= 79){
        secondtext.innerHTML = "Average";
    }
    else if (secondgrade >= 60 && secondgrade <= 69){
        secondtext.innerHTML = "Poor";
    }
    else if (secondgrade >= 0 && secondgrade <= 59){
        secondtext.innerHTML = "Failed";
    }
    else{
        secondtext.innerHTML = "You hit the limit";
    }

    var thirdgrade = document.getElementById("inputenglish").value;
    var thirdtext = document.getElementById("sub3");

    if ( thirdgrade >=90 &&  thirdgrade <=100){
        thirdtext.innerHTML = "Outstanding";
    }
    else if ( thirdgrade >= 80 &&  thirdgrade <= 89){
        thirdtext.innerHTML = "Very Good";
    }
    else if ( thirdgrade >= 70 &&  thirdgrade <= 79){
        thirdtext.innerHTML = "Average";
    }
    else if ( thirdgrade >= 60 &&  thirdgrade <= 69){
        thirdtext.innerHTML = "Poor";
    }
    else if ( thirdgrade >= 0 &&  thirdgrade <= 59){
        thirdtext.innerHTML = "Failed";
    }
    else{
        thirdtext.innerHTML = "You hit the limit";
    }

    var fourthgrade = document.getElementById("inputfilipino").value;
    var fourthtext = document.getElementById("sub4");

    if ( fourthgrade >=90 &&  fourthgrade <=100){
        fourthtext.innerHTML = "Outstanding";
    }
    else if ( fourthgrade >= 80 &&  fourthgrade <= 89){
        fourthtext.innerHTML = "Very Good";
    }
    else if ( fourthgrade >= 70 &&  fourthgrade <= 79){
        fourthtext.innerHTML = "Average";
    }
    else if ( fourthgrade >= 60 &&  fourthgrade <= 69){
        fourthtext.innerHTML = "Poor";
    }
    else if ( fourthgrade >= 0 &&  fourthgrade <= 59){
        fourthtext.innerHTML = "Failed";
    }
    else{
        fourttext.innerHTML = "You hit the limit";
    }

    var fifthgrade =document.getElementById("inputpEd").value;
    var fifthtext = document.getElementById("sub5");

    if ( fifthgrade >=90 &&  fifthgrade <=100){
        fifthtext.innerHTML = "Outstanding";
    }
    else if ( fifthgrade >= 80 &&  fifthgrade <= 89){
        fifthtext.innerHTML = "Very Good";
    }
    else if ( fifthgrade >= 70 &&  fifthgrade <= 79){
        fifthtext.innerHTML = "Average";
    }
    else if ( fifthgrade >= 60 &&  fifthgrade <= 69){
        fifthtext.innerHTML = "Poor";
    }
    else if ( fifthgrade >= 0 &&  fifthgrade <= 59){
        fifthtext.innerHTML = "Failed";
    }
    else{
        fifthtext.innerHTML = "You hit the limit";
    }

    var ranking = document.getElementById("frank");

    if(firsttext.innerHTML == "Outstanding" && secondtext.innerHTML == "Outstanding" && thirdtext.innerHTML == "Outstanding" && fourthtext.innerHTML == "Outstanding" && fifthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Top Honor Student";
    }
    else if(firsttext.innerHTML == "Outstanding" && secondtext.innerHTML == "Outstanding" && thirdtext.innerHTML == "Outstanding" && fourthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Second Honor Student";
    }
    else if(firsttext.innerHTML == "Outstanding" && secondtext.innerHTML == "Outstanding" && thirdtext.innerHTML == "Outstanding" && fifthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Second Honor Student";
    }
    else if(firsttext.innerHTML == "Outstanding" && secondtext.innerHTML == "Outstanding" && fourthtext.innerHTML == "Outstanding" && fifthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Second Honor Student";
    }
    else if(firsttext.innerHTML == "Outstanding" && thirdtext.innerHTML == "Outstanding" && fourthtext.innerHTML == "Outstanding" && fifthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Second Honor Student";
    }
    else if(secondtext.innerHTML == "Outstanding" && thirdtext.innerHTML == "Outstanding" && fourthtext.innerHTML == "Outstanding" && fifthtext.innerHTML == "Outstanding"){
        ranking.innerHTML ="Second Honor Student";
    }
   
}
