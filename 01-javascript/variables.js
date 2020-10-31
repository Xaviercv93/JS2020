"use strict"
//mutables e inmutables
//mutable = que puede cambiar en el tiempo
//mutable = reasignar el valor

var numero1 = 1;
let numero2 = 2;

numero1 = 5;
numero2 = 8;

//reasigno valores de diferentes tipos
//esto es un problema en aplicaciones grandes por que no se puede decir que 
//esa variable no cambie de tipo de dato en el tiempo
numero1 = false;
numero2 = true;

//INMUTABLES
//CONSTANTES
const configuracionArchivos = "PDF";
//no puedo reasignar configuracionArchivos
//configuracionArchivos = "XML";

//tipos de variables
//numeros enteres y numeros decimales son number
const numero = 1;
const sueldo = 1.2;
const texto = "javi";
const booleanoo = true;
const hijo = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero, typeof sueldo, typeof texto, typeof booleanoo,
    typeof hijo, typeof zapatos);

//La clase Number me devuelve un number y comprueba si algo pasado como argumento es un numero
console.log(typeof Number("javi"),Number("javi"));











