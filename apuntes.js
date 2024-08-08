
//Comentarios
//comillas simples
alt + 39 ''

alert ('Hola desde un alert');

// Formas de declarar una variable, se usa más el segundo caso 
var apellido = "Rojas"
let nombre = 'Anel'

const pi = 3.14;
//string nombre  = "Juan"
//Tipos de datos

//No definido
let noDefinido;

// número 
let cantidad = 50; 

//cadena de texto o spring 
let bebida = "agua";

//booleanos 
let activo = true; 


//objetos
//persona: nombre, apellido, edad, peso 

let persona = { nombre : 'Michell', apellido : 'Chavez', edad : '23', peso : '70'}
console.log(persona);

//Arrays cole 
let personas = [
    {nombre: 'Melanie', apellido : 'Matus', edad : '21'},
    {nombre: 'Maira', apellido : 'Matus', edad : '21'},

]
console.log(personas); 
console.log(personas[2]); 

//funciones JS
//listado de instrucciones 

function suma (a, b){
    return a + b; 
}
function suma(params) {
    return 2+2; 

}
let resultado = suma(); 
console.log(resultado);


function multiplicacion(a, b){
    return a * b;
}
let resultado = multiplicacion(5, 7);
console.log(resultado);




