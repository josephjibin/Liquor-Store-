function myFunc(){
var age = document.getElementById("term").value

if(age>=18){
  window.open("http://127.0.0.1:5501/index.html")
}else{
  document.write("You are under age")
}
}