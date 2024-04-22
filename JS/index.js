/*mi primer codigo js
window.alert("bienvenido a la página");*/


var number_1 = 10;
var number_2 = 12;
var result   = 0;

result = number_1 + number_2;
console.log(result);

result = number_1 - number_2;
console.log(result);

result = number_1 / number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);
document.getElementById("resultado").innerHTML="El resultado es";
document.write("<h1>certus oficial</h1>");
var texto ="";
texto = "inscripciones abiertas";
document.getElementById("mensaje").innerHTML=texto;
/*arrais o arreglos*/
var nombres =["Juan","Pedro","María"];
var edades =[19,22,21];
var datos =nombres[0]+" "+edades[0];
var datos =nombres[1]+" "+edades[1];
var datos =nombres[2]+" "+edades[2];

console.log(datos1);
console.log(datos2);
console.log(datos3);

function sumar(value1,value2){
    var result1 = value1+value2;
    document.getElementById("function").innerHTML="el resultado de la suma es:"+result 
}
sumar(1,2);