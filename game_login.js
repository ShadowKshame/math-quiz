function addUser(){

p1=document.getElementById("player1_name_input").value;
p2=document.getElementById("player2_name_input").value;

localStorage.setItem("pname1",p1);
localStorage.setItem("pname2",p2);
window.location="game.html";
}