// to make a content in one row
function MakeRow(){
     let Make = document.getElementById("row").setAttribute("class","col-12");
     document.getElementById("row").style.position = "relative";
     document.getElementById("row").style.left = "381px";
     document.getElementById("row").style.transition = "all .7s  ease-in-out";
     document.getElementById("MakeRow").style.color = "#095696";
     document.getElementById("BackRow").style.color = "#aca7a7";      
}    
// to make a content in three row
function BackRow(){
     let Back = document.getElementById("row").setAttribute("class","row text-center");
     document.getElementById("row").style.position = "";
     document.getElementById("row").style.left = "0";
     document.getElementById("MakeRow").style.color = "#aca7a7";
     document.getElementById("BackRow").style.color = "#095696";
}    
// to show password in login and signup
var password = false;
function showPassword() {
     // to show password
     if(password === false){
     document.getElementById("password").setAttribute("type","text");
     document.getElementById("svg").style.color = "#095696";
     password = true; }
     // to hidden password
     else {
     document.getElementById("password").setAttribute("type","password");
     document.getElementById("svg").style.color = "#767676"; 
     password = false; }
}
// 