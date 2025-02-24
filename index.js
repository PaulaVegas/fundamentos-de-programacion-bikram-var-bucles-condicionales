//VARIABLES
//Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false; 

//Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2;


//BOOLEANOS
//Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;

//Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1
let booleanoNot = !booleano1;
//Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
booleanoMix0 = booleano1 || (booleano2 && (booleano1 || (booleano1 && !booleano2)));


//OPERADORES
//Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
let incrementarDesp = 2;
resultadoDesp = incrementarDesp++;
//Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2;
resultadoAntes = ++incrementarAntes;


//BUCLES
//Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
}

//Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI = postI + postJ++;
}

//Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    } else {
        continue;
    }
}

//INDIVIDUAL
//Variables
//Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera
let variableValorNumerico = 15;

//Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
const MiNombre = 'Paula';

//Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MiNumeroFav = 17;


//Booleanos
//Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2
let booleanoOr = booleano1 || booleano2;

//Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
let booleanoMix1 = booleano1 && ((TAU / 2) === PI) || variableValorNumerico >= MiNumeroFav;

//Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9
let seisNoEsNueve = 6!== 9;

//Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < (MiNumeroFav * TAU);


//Operadores
//Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
let valorSuma = MiNumeroFav + variableValorNumerico;

//Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico;

//Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
let valorDivision = MiNumeroFav / 3;


//Bucles
//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;
}

//Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ;
}

//Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        sumaImpares += i;
    } else {
        continue;
    }
}