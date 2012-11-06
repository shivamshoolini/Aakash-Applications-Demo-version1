/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function doAlert(){
    isAllSelected();
    return false;
}
function isAllSelected() {
     var isAllSelected = false;
     var answers = new Array();
     answers[0] = "1";
     answers[1] = "2";
     answers[2] = "3";
     answers[3] = "2";
     answers[4] = "2";
     answers[5] = "3";
     answers[6] = "3";
     var marks = 0;
     var increment = 0;
     for(var i=0;i<3;i++){
         if(document.motionExercise.soldiers[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.soldiers[i].value==answers[0]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.bullock[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.bullock[i].value==answers[1]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.hands[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.hands[i].value==answers[2]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.pedal[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.pedal[i].value==answers[3]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.earth[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.earth[i].value==answers[4]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.swing[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.swing[i].value==answers[5]) {
                 marks = marks+1;
             }
         }
         if(document.motionExercise.pendulum[i].checked==true){
             increment = increment+1;
             if(document.motionExercise.pendulum[i].value==answers[6]) {
                 marks = marks+1;
             }
         }
     }
      if(increment == 7) {
         isAllSelected = true;
         var percent = (marks*100)/7;
         var success = parseInt(percent);
         if(success > 80) {
             document.getElementById("result").style.display="block";
             document.getElementById("result").innerHTML = "Excellent! You have classified "+marks+" out of 7 (for over "+success+"% correct)";
         } else if(success >60) {
             document.getElementById("result").style.display="block";
             document.getElementById("result").innerHTML = "You have an average performance. You have classified "+marks+" out of 7 (for over "+success+"% correct)";
         }else {
             document.getElementById("result").style.display="block";
             document.getElementById("result").innerHTML = "You need to revise and understand types of motion. You have only classified "+marks+" out of 7";
         }
      }else {
             document.getElementById("result").style.display="block";
             document.getElementById("result").innerHTML = "Please answer all the questions.";
      }
      return false;
}

function exercise2Result() {
    var answer1;
    var answer2;
    var fast = 5;
    var slow = 8;
    for(var i=0;i<document.exercise2.exercise2fast.length;i++) {
       if(document.exercise2.exercise2fast[i].checked==true) {
           answer1 = document.exercise2.exercise2fast[i].value;
        }
    }
    for(var i=0;i<document.exercise2.exercise2slow.length;i++) {
       if(document.exercise2.exercise2slow[i].checked==true) {
           answer2 = document.exercise2.exercise2slow[i].value;
       }
    }
    var first = false;
    var second = false;
    if(answer1 == fast) {
        first = true;
    }
    if(answer2 == slow) {
        second = true;
    }
    document.getElementById("result2").style.display="block";
    var solution = "<br><b>Solution:</b> Cars A,B,C.D,F,G have moved forwards relative to car H<br>Car E has moved forwards relative to cars A,B,C,D,F,G<br>Car E is fastest and car H is slowest.";
    if(first == true && second == true) {
        document.getElementById("result2").innerHTML="You have correctly spoted the fastest and slowest moving car."+solution;
    } else if(first == true && second == false ) {
        document.getElementById("result2").innerHTML="You have correctly spoted the fastest but not slowest moving car."+solution;
    } else if(first == false && second == true) {
        document.getElementById("result2").innerHTML="You have correctly spoted the slowest but not fastest moving car."+solution;
    } else {
        document.getElementById("result2").innerHTML="You have not spoted both slowest and fastest moving car."+solution;
    }   
}

function exercise3Result() {
    var answered = "bus";
    var answer3 = "";
    document.getElementById("result3").style.display="block";
    for(var i=0;i<document.exercise3.exercise3opt.length;i++) {
       if(document.exercise3.exercise3opt[i].checked==true) {
           answer3 = document.exercise3.exercise3opt[i].value;
        }
    }
    if(answer3 == "") {
        document.getElementById("result3").innerHTML = "Please answer the question before.";
    }
    else if(answer3 == answered) {
        document.getElementById("result3").innerHTML = "You are right, bus is moving faster than bicycle.";
    } else {
        document.getElementById("result3").innerHTML = "Sorry you are wrong, You need to revise and understand motion.";
    }
}

function exercise4Result() {
    var result = document.exercise4.exercise4runner.value;
    var answer = 4;
    document.getElementById("result4").style.display="block";
    if(result == answer) {
        document.getElementById("result4").innerHTML = "Correct answer!,As we can see, things which cover same distance in shorter time are faster.";
    }
    else {
        document.getElementById("result4").innerHTML = "Sorry, your answer is wrong. You need to revise the concepts of time and motion.";
    }
    
}

function exercise5Result() {
    
}

function exercise6AResult() {
    var result = document.exercise6.exercise6sec.value;
    document.getElementById('result6a').style.display = "block";
    if(result == "") {
        document.getElementById("result6a").innerHTML = "Please enter any value.";
    } else if(result == 86400) {
        document.getElementById("result6a").innerHTML = "Your answer is correct. <br>There are 60 seconds in a minute. There are 60 minutes in an hour. Therefore there are 60*60 = 3600 seconds in an hour. There are 24 hours in a day. Therefore there are 24*3600= 86400 seconds in a day.";
    } else {
         document.getElementById("result6a").innerHTML = "Your answer is incorrect. <br>There are 60 seconds in a minute. There are 60 minutes in an hour. Therefore there are 60*60 = 3600 seconds in an hour. There are 24 hours in a day. Therefore there are 24*3600= 86400 seconds in a day.";
    }
}

function exercise6BResult() {
    var result = document.exercise6.exercise6hour.value;
    document.getElementById('result6b').style.display = "block";
    if(result == "") {
        document.getElementById("result6b").innerHTML = "Please enter any value.";
    } else if(result == 8760) {
        document.getElementById("result6b").innerHTML = "Your answer is correct. <br>There are 24 hours in a day. There are 365 days in a year. Therefore there are 24*365 = 8760 hours in a year.";
    } else {
         document.getElementById("result6b").innerHTML = "Your answer is incorrect. <br>There are 24 hours in a day. There are 365 days in a year. Therefore there are 24*365 = 8760 hours in a year.";
    }
}

function exercise7Result() {
    var res = new Array();
    var rstr;
    var a11 = document.exercise7.exercise7c11.value;
    var a21 = document.exercise7.exercise7c21.value;
    var a31 = document.exercise7.exercise7c31.value;
    var result1 = (a11/a21).toString();
    var a41 = result1.substring(0,result1.indexOf(".")+3);
    
    var a12 = document.exercise7.exercise7c12.value;
    var a22 = document.exercise7.exercise7c22.value;
    var a32 = document.exercise7.exercise7c32.value;
    var result2 = (a12/a22).toString();
    var a42 = result2.substring(0,result2.indexOf(".")+3);

    var a13 = document.exercise7.exercise7c13.value;
    var a23 = document.exercise7.exercise7c23.value;
    var a33 = document.exercise7.exercise7c33.value;
    var result3 = (a13/a23).toString();
    var a43 = result3.substring(0,result3.indexOf(".")+3);

    var a14 = document.exercise7.exercise7c14.value;
    var a24 = document.exercise7.exercise7c24.value;
    var a34 = document.exercise7.exercise7c34.value;
    var result4 = (a14/a24).toString();
    var a44 = result4.substring(0,result4.indexOf(".")+3);

    var a15 = document.exercise7.exercise7c15.value;
    var a25 = document.exercise7.exercise7c25.value;
    var a35 = document.exercise7.exercise7c35.value;
    var result5 = (a15/a25).toString();
    var a45 = result5.substring(0,result5.indexOf(".")+3);
    
    
}

function exercise8Result() {
    var result = document.exercise8.exercise8comp.value;
    alert(result);
    document.getElementById("result8").style.display = "block";
    if(result == "") {
        document.getElementById("result8").innerHTML = "Please enter any value.";
    } else if(result == 10000) {
        document.getElementById("result8").innerHTML = "Your answer is correct.";
    } else {
         document.getElementById("result8").innerHTML = "Your answer is incorrect.";
    }
}

function funcwyhl1(val) {
    document.getElementById("resultwyhl").style.display = "block";
    if(val == true) {
        document.getElementById("resultwyhl").innerHTML = "Correct!";
    } else {
        document.getElementById("resultwyhl").innerHTML = "Incorrect!";
    }
}
function funcwyhl2(val) {
    document.getElementById("resultwyhl").style.display = "block";
    if(val == false) {
        document.getElementById("resultwyhl").innerHTML = "Correct!";
    } else {
        document.getElementById("resultwyhl").innerHTML = "Incorrect!";
    }
}
function funcwyhl3(val) {
    document.getElementById("resultwyhl").style.display = "block";
    if(val == true) {
        document.getElementById("resultwyhl").innerHTML = "Correct!";
    } else {
        document.getElementById("resultwyhl").innerHTML = "Incorrect!";
    }
}
function funcwyhl4(val) {
    document.getElementById("resultwyhl").style.display = "block";
    if(val == false) {
        document.getElementById("resultwyhl").innerHTML = "Correct!";
    } else {
        document.getElementById("resultwyhl").innerHTML = "Incorrect!";
    }
}
function funcwyhl5(val) {
    document.getElementById("resultwyhl").style.display = "block";
    if(val == false) {
        document.getElementById("resultwyhl").innerHTML = "Correct!";
    } else {
        document.getElementById("resultwyhl").innerHTML = "Incorrect!";
    }
}
function funcwyhl8(val) {
    document.getElementById("resultwyhl8").style.display = "block";
    if(val == "a") {
        showCorrectMessage("resultwyhl8");
    } else {
        showIncorrectMessage("resultwyhl8");
    }
}
function funcwyhl9(val) {
    document.getElementById("resultwyhl9").style.display = "block";
    if(val == "d") {
        showCorrectMessage("resultwyhl9");
    } else {
        showIncorrectMessage("resultwyhl9");
    }
}
function funcwyhl10(val) {
    document.getElementById("resultwyhl10").style.display = "block";
    if(val == "b") {
        showCorrectMessage("resultwyhl10");
    } else {
        showIncorrectMessage("resultwyhl10");
    }
}

function showCorrectMessage(id) {
    document.getElementById(id).innerHTML = "Correct!";
}

function showIncorrectMessage(id) {
    document.getElementById(id).innerHTML = "Incorrect!";
}

function resultExercise7() {
    var distance = new Array();
    var time = new Array();
    var dist = "dist";
    var tm = "time";
    var spd = "speed";
    var speed;
    for(var i=0;i<5;i++) {
        dist = "dist" + (i+1);
        tm = "time" + (i+1);
	distance[i] = document.getElementById(dist).value;
	time[i] = document.getElementById(tm).value;
    }
    for(var i=0;i<5;i++) {
        spd = "speed"+(i+1);
        if(!isNaN(distance[i]) && !isNaN(time[i])) {
            speed = parseFloat(distance[i])/parseFloat(time[i]);
            document.getElementById(spd).value = speed;
        } else {
     	    document.getElementById(spd).value = "Incorrect values";
        }
    }
    return false;
}