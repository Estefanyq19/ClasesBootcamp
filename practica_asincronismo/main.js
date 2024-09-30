import logger from "./logger";
import { PI, sumar, saludo} from "./operaciones";
import { promise } from "./promesa";
import { dividir, convertirNumero} from "./test";

console.log(PI);
//console.log(logger("Hola desde una exportacion predeterminada"));
console.log(logger);
console.log(saludo);

console.log(dividir(10,5));
//Validando el resultado de la división

try{
    //code...
    let resultado = dividir(10,0);
    console.log('Resultado: ',resultado);
}catch(error){
    console.log('Ocurrió un error', error.message);
}


console.log(convertirNumero("100"));
console.log(convertirNumero("100b"));