/*
Retos de programación en cualquier lenguaje - Primer nivel: salida de mensajes
Héctor Daniel
Terranigma
Cuando aprendes a programar uno de los principales retos es refozar el aprendizaje para que fluya.
Por este motivo te comparto una serie de ejercicios para nunca pares de aprender que además pueden ir enriqueciendo tu repositorio personal.

Estos ejercicios pueden ser aplicados a tu lenguaje de programación favorito, harás uso de lógica y matemática sencilla. Conforme avancemos el nivel de dificultad aumentará 💪
No existe una respuesta única ya que puedes resolverlos de distinta forma.
--------------------------------------------------------------------------
Reto #1 “Hola Mundo”
Instrucciones: este es un clásico de clásicos, pero haremos un pequeño cambio. En lugar de solo imprimir un mensaje en pantalla, pedirás al usuario que digite un nombre y mostrarás en pantalla lo siguiente: Hola, [nombre]*/ 

let name = 'ivan';
console.log(`hola, ${name}`);

/*---------------------------------------------------------------------
Reto #2 “Hola… nombre y apellido:”
Instrucciones: Ahora que sabemos incluir nombres, podemos agregar más datos. Intentemos con un apellido para tener algo así: ``Hola, [nombre] [apellido]```
*/

let name = 'ivan';
let lastName = 'rojas';
console.log(`hola, ${name} ${lastName}`);

/*-----------------------------------------------------------------------
Reto #3 “Mensaje multilínea”
Instrucciones: seguro has visto que en Platzi hay más de 600 cursos ¿puedes mostrar a que categorías corresponden en una sola línea de código?
Debe mostrarse así:
*/

console.log(`categoria1
categoria2
categoria3
categoria4
categoria5
categoria6
`);

/*---------------------------------------------------------------------------
Reto #4 “Suma de enteros”
Instrucciones: otro clásico conocido, donde pedirás al usuario que ingrese 2 números y muestre en pantalla el resultado. Si quieres añadir más dificultad puedes utilizar números con punto decimal y especificar el número de decimales después del punto.
Ejemplo: 2.5633 + 5.6883 = 8.25
*/

// ejecutar en browser
var a = 0;
var b = 0;
a     = prompt(`inserta un numero...  `);
b     = prompt(`inserta un segundo numero...  `);
res   = parseInt(a)+parseInt(b);
console.log(`el resultado es ${res}`);

/*------------------------------------------------------------------------
Reto #5 “Suma y multiplicación”
Instrucciones: añadiendo un extra al reto anterior ahora el usuario ingresará 3 números, sumarás los 2 primeros y el resultado será multiplicado por el tercero. Añade las consideraciones del punto decimal del reto anterior.
Ejemplo:
Datos de entrada:2, 3, 4
Resultado:20
 */

 // ejecutar en browser
var a, b, c, sum, res;
a = prompt(`inserta un numero`);
b = prompt(`inserta un 2do numero`);
sum = parseInt(a)+ parseInt(b);
console.log(`el resultado de la suma es ${sum}`);

c = prompt(`inserta un numero para multiplicarlo con el anterior`);
res = parseInt(c)*parseInt(sum);
console.log(`el resultado de la multiplicacion es ${res}`);


/*---------------------------------------------------------------
Reto #6 “Resta de pizzas”
Instrucciones: llegaste a una fiesta con X cantidad de rebanadas de pizza (indicadas por el usuario), después de un rato se consumió Y cantidad de rebanadas y quedan Z. Fácil ¿cierto?
El reto está en que expreses lo que sucede es una forma comprensible para cualquier persona, imprescindible pensar en tus usuarios 😉
-*/

// ejecutar en browser
var user, piezas, devoradas, quedan;
user = prompt(`¿cual es tu nombre?`);
piezas = prompt(`hola ${user}, cuantas piezas de pizza traes a la reu?`);
alert('al cabo de un rato se comen unas cuantas piezas de pizza');
devoradas = prompt(`cuantas piezas crees que nos hemos comido?`);
quedan = parseInt(piezas) - parseInt(devoradas);
alert( `quedan ${quedan} piezas de pizza`);


/*-----------------------------------------------------------
Reto #7 “Edad futura y pasada”
Instrucciones: pide al usuario que indique su nombre y su edad. Como mensaje de salida le indicarás que edad tuvo el año pasado y cuantos años tendrá el siguiente año.
Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.
*/

// ejecutar en browser
var name, age, past, next;
name = prompt(`DIME TU NOMBRE`);
age = prompt(`dime tu edad`);
past = parseInt(age) -1; 
next = parseInt(age) + 1;
alert(`el año pasado tenias ${past}
este año tienes ${age}
y el año que viene tendras ${next}`);

/*------------------------------------------------------------------------
Reto #8 “Divide la cuenta”
Instrucciones: vas con tus amigos a tu restaurante favorito y acuerdan dividir la cuenta. Para facilitar las cosa pedirás al usuario que indique el total a pagar, entre cuantas personas se dvidirá la cuenta, porcentaje de propina a incluir, un porcentaje de impuestos, total a pagar incluyendo propina más impuestos y el total a pagar por cada persona.
*/


var cuenta, comensales;
cuenta = prompt(`cuanto es el total a pagar`);
comensales = prompt(`cuantos comensales son?`);
var imp = parseInt(cuenta)*16/100;
var propin = parseInt(cuenta)*30/100;
var res = parseInt(cuenta)+imp+propin; 
alert(`el total a pagar es ${res}`);
var resf = res / parseInt(comensales);
 alert(`el monto a pagar por persona es ${resf}`);




/*-------------------------------------------------------------------------
Reto #9 “Calculando días”
Instrucciones: escribe un programa al que le indiques una cantidad de días y como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha cantidad de días.
*/



var dias = prompt(`inserta la cantidad de dias`);
var horas = parseInt(dias)*24;
var min = horas*60;
var seg = min*60;
alert(`${dias} dias son:
 en horas:${horas}
 en minutos:${min}min 
 en segundos:${seg}seg`);





/*--------------------------------------------------------------------------
Reto #10 “Conversor de millas”
Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que el usuario indique una cantidad de millas y muestre en pantalla el resultado convertido a kilómetros.*/

var milla = prompt(`inserta distancia en millas`);
var resu = parseInt(milla)*1.609344 ;
if (milla == 1){
    alert(`${milla}milla son ${resu}kilometros`);
}else{
    alert(`${milla}millas son ${resu}kilometros`);
}













/*----------------------------------------------------------------------
Reto #11 “Cuantas veces un número en otro”
Instrucciones: pide al usuario ingresar un número mayor a 1000 y otro menor a 100. Indica de una forma sencilla de entender al usuario cuantas veces cabe el número menor a 100 en el número mayor a 1000*/