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
console.log(typeof Number("javi"), Number("javi"));


console.log("TRUTY Y FALSY");

//truty y falsy
if (true == true) {
    console.log("es verdad");
} else {
    console.log("es verdad");
}

//falsy = cadena de caracteres vacia
if ("") {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//truty = cadena de caracteres con algo
if ("jajaja") {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//truty = numeros negativos

if (-1) {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//falsy = el numero 0
if (0) {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//truty = numeros positivos

if (1) {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//falsy = el null
if (null) {
    console.log("es truty")
} else {
    console.log("es falsy")
}

//falsy = el undefined
if (undefined) {
    console.log("es truty")
} else {
    console.log("es falsy")
}
console.log("siempre comprobar la existencia de los falsy \"\" 0 null undefined\n");


console.log("---------Orden importancia de variables");
console.log(`const = usarlo siempre que se pueda
let = usarlo si no se puede algo ser const
var = NUNCA USARLO`);


console.log("---------Objeto js y arreglos");

console.log(`no se necesita constructor
no son lo mismo que JSON ---> tipo Object != JSON
son de tipo object
NO HAY DIFERENCIA ENTRE OBJETOS COMO NULL, LOS OBJETOS LLENOS Y ARREGLOS`);

//objeto vacio tipo object
//es un objeto valido
const vacio = {

};

//objeto lleno tipo object
const lleno = {
    nombre: "jaja",
    //se puede decifir las propiedades con strings
    "apellido": 'nose',
    edad: 31,
    hijos: null,
    zapatos: undefined,
    casado: false,
    //objeto dentro de otro objeto
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascota: ['peluchin', 'blanco', 'estrella', 'bebe', 'luna', 'firulais'],
};


//imprimo todo el objeto
console.log(lleno);
//imprimo una propiedad del objeto
console.log(lleno.mascota);
//imprimo una propiedad del objeto
console.log(lleno["mascota"]);


console.log(`\nAunque el objeto sea const
se puede reasigna o cambiar los valores de las propiedades del objeto lleno
si se puede cambiar cuantas o cuales propiedades tiene`);

lleno.mascota = ["bethoben", "pelos"];
console.log(lleno.mascota);

console.log("\nvariables no definida saldo");
console.log(lleno.sueldo); //resultado undefined
console.log("\n añado nueva propiedad saldo ");
console.log(lleno.sueldo = 1.5); //resultado 1.5
console.log(lleno);//resultado objeto con propiedad saldo al final
console.log("\n borro el valor de nueva propiedad saldo ");
console.log(lleno.sueldo = undefined); //resultado undefined
console.log(lleno);//resultado objeto con propiedad saldo al final con valor undefined
console.log("\n elimino realmente nueva propiedad saldo ");
console.log(delete lleno.sueldo); //resultado undefined
console.log(lleno);//resultado objeto sin propiedad saldo 

console.log("\n----Clase object - obtener las keys");
console.log(Object.keys(lleno));
lleno.direccion="quito";
console.log(Object.keys(lleno));
lleno.direccion=undefined;
console.log(Object.keys(lleno));
delete lleno.direccion;
console.log(Object.keys(lleno));

console.log("\n----Clase object - obtener los values");
console.log(Object.values(lleno));
lleno.direccion="quito";
console.log(Object.values(lleno));
lleno.direccion=undefined;
console.log(Object.values(lleno));
delete lleno.direccion;
console.log(Object.values(lleno));



//arreglo tipo object
const arregloNumero = [];
console.log(arregloNumero);













