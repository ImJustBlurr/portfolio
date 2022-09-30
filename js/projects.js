document.addEventListener("DOMContentLoaded", function() {
  setInterval(() => {getAge()}, 100);
  setTimeout(function(){
	  document.getElementById("main").style.opacity = 1;
  }, 20);
  setTimeout(typeWriter, 1000);
  setTimeout(function(){
	  document.getElementById("appear").style.opacity = 1;
  }, 3000);
});



var i = 0,
  txt = 'python projects.py',
  speed = 50;

function typeWriter() {
	
  if (i < txt.length) {
    document.getElementById('typewriter').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
	
  }
  
}

function getAge() {
  	let age = (new Date() - new Date(1036548000000)) / (1000*60*60*24*365.25);
	document.getElementById("age").innerText = age.toString().substring(0, 12);
}