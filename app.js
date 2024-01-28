
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();


//Desafios
/*
//1.
let listaGenerica = [];

//2.
let lenguajesDeProgramacion = ['JavaScript', 'C','C++', 'Kotlin', 'Python'];

//3.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLand');

//4.
let lenguajesDeProgramacion = ['JavaScript', 'C','C++', 'Kotlin', 'Python','Java', 'Ruby', 'GoLand'];
function mostrarLista(){
console.log(lenguajesDeProgramacion);
}
mostrarLista();

//5.
function mostrarListaInversa(){
console.log(lenguajesDeProgramacion.reverse());
}
mostrarListaInversa();


//6.
let suma = 0;
let listaNumeros = [21,65,85,34,82,40];

function calcularPromedio(){
for (i=0;i<listaNumeros.length;i++){
    suma=suma + listaNumeros[i];
    console.log(listaNumeros[i]);
}
let promedio = suma/listaNumeros.length;
console.log(`El promedio de los elementos de la lista es: ${promedio}`);
}
calcularPromedio();


//7.

let listaNumeros = [21,65,85,34,82,40];
function numeroMayor(listaNumeros){
    let mayor = listaNumeros[0];
    let menor = listaNumeros[0];
for (i=1;i<listaNumeros.length;i++){
    if (listaNumeros[i]>mayor){
        mayor=listaNumeros[i];
    }
    if(listaNumeros[i]<menor){
        menor=listaNumeros[i];
    }
   
        }
        console.log('El numero mayor es: ' + mayor);
        console.log('El numero menor es: ' + menor);
    }
    numeroMayor(listaNumeros);
*/
/*
//8.
let listaNumeros = [21,65,85,34,82,50];
function sumaLista(){
    let suma = listaNumeros[0];
    for (i=1;i<listaNumeros.length;i++){
     suma=suma+listaNumeros[i];

    }
    console.log(`La suma es: ${suma}`);
}

sumaLista(listaNumeros);
*/
//9.

/*
function devolverPosicion(x){
    let listaNumeros = [21,65,85,34,82,50];
    if (x>listaNumeros.length){
        return -1;
    }else 
    return x=listaNumeros[x];
   
    
}
let x=5;
let posicionLista = devolverPosicion(x);
console.log(`El valor de la posicion ${x} es ${posicionLista}`);
*/
/*
//10.

let listaUno = [5,9,7,10];
function sumaListas (lista){
    for(let i=0; i<listaUno.length;i++){
        let nuevaLista = (listaUno[i])**2;
        console.log(nuevaLista);
    } 
}
sumaListas(listaUno);
*/