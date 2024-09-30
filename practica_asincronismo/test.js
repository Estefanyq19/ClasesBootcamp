//Manejo de errores
export function dividir(a, b){
    //Validando si el segundo número no es cero
    if(b == 0){
        throw new Error('Division por cero no permitida');
    }

    return a/b;
}

//Uso de manejo de errores

export function convertirNumero(str){
    //Si la cadena es un numero lo imprimimos pero si no es un numero, vamos a mandar
    //un error (try/catch)

    try{
        //code..
        let numero = Number(str);
        if(isNaN(numero)){
            throw new Error("Formato Invalido");
        }
        return numero;
    }catch(error){
        return 'Error: ', error.message;
    }
}