console.log("Parte 1 tipos de datos:\n");
///Declaracion de variables
let numero: number = 7;
let nombre: string = 'Cristian';
let boleano: boolean = true;

let unArregloExotico: (number | number[])[] = [1, 2, 3.0, 4];

let objeto: { nombre: string; apellido: string; edad: number; correo: string } = {
    nombre: 'Juanito',
    apellido: 'alimaña',
    edad: 20,
    correo: 'ejemplo@gmail.com'
};

console.log(numero + nombre + boleano + JSON.stringify(unArregloExotico) + JSON.stringify(objeto));


console.log("\nParte 2 condicionales:\n");
//parte 2 conducionales
//programa que verifica si el numero es postivo, negativo o igual a cero

let numero1: number = 14;//creo y doy valor a la variable

if (numero1 > 0) //creo un if que indica si el numero de la variable es mayor que 0 esto para saber si es positivo
{
    console.log("El número es positivo: "+numero1+"\n");//imprimo por consola si la primera condicion se cumple
} else if (numero1 < 0) // hago un else if el cual evalua si el numero es menor que 0 para saber si es negativo
{
    console.log("El número es negativo: "+numero1+"\n");// si esta condicion se cumple se imprime por consola este mensaje
} else // si ninguna de las anteriores condiciones se cumple es por que el numero es 0 
{
    console.log("El número es igual a cero"+"\n");
}


//Función con parámetros y retorno numérico:
function sumar (a: number, b: number): number {
    return a + b;
}

let resultadoSuma: number = sumar (5, 3);



//Función con parámetro opcional:
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return saludo + ' ' + nombre;
    } else {
        return 'Hola ' + nombre;
    }
}

console.log("\nParte 3 Funciones");
//FUNCIONES BASICAS
let mensajeSaludo: string = saludar('Juan'); // Resultado será 'Hola Juan'
let mensajePersonalizado: string = saludar('Ana', '¡Hola'); // Resultado será '¡Hola Ana'

//Función con parámetros por defecto:
function construirFrase(sujeto: string, verbo: string = 'es', complemento: string = 'genial'): string {
    return sujeto + ' ' + verbo + ' ' + complemento;
}

let frase1: string = construirFrase('La programación'); // Resultado será 'La programación es genial'
let frase2: string = construirFrase('Los gatos', 'son', 'adorables'); // Resultado será 'Los gatos son adorables'



//Función con parámetros de diferentes tipos y retorno condicional:
function mezclar(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return String(a) + String(b);
    }
}

let resultadoMezcla1: number | string = mezclar(5, 3); // Resultado será 8
let resultadoMezcla2: number | string = mezclar('Hola', ' Mundo'); // Resultado será 'Hola Mundo'

console.log("Funciones con parametros opcionales y predeterminadas:\n");
///Funciones con Parámetros Opcionales y Predeterminados:
//Creen funciones que utilicen parámetros opcionales y con valores predeterminados.

function procesarDatos(cadena: string, numero3?: number, cadenaSecundaria: string = "coco"): void {
    // Concatenar cadena y número (si número está presente)
    const resultado = numero3 !== undefined ? `${cadena} ${numero3}` : cadena;
    
    // Concatenar cadena principal y cadena secundaria
    const resultadoFinal = `${resultado} - ${cadenaSecundaria}`;

    console.log("Resultado:", resultadoFinal);
}

// Ejemplos de uso
procesarDatos("Número");                        // Output: Resultado: Número - Default
procesarDatos("Número", 42);                    // Output: Resultado: Número 42 - Default
procesarDatos("Número", 42, "Especial");       // Output: Resultado: Número 42 - Especial
procesarDatos("Hi", undefined, "developers");  // Output: Resultado: OtraCadena - Personalizado