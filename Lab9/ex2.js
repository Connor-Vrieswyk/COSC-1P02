var date = new Date();
var year = (Number)(date.getFullYear());
var birth = year - (Number)(prompt("What is your age?"));

document.getElementById('print').innerHTML= "year of birth is " + birth;

