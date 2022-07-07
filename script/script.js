let word = document.getElementById("word");

let circle = word.textContent.split("");
word.textContent = "";

for(var i = 0; i < circle.length; i++){
    word.innerHTML += "<span style='transform:rotate(" + (i*8) +"deg)'>"+ circle[i] +"</span>";
}