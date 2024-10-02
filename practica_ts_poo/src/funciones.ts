//función declarativa

export function multiplicar(a:number, b:number): number{
    return a*b;
}

multiplicar(10, 5);

//expresion de funciones

export const agregarProducto = ():boolean =>{
    return true;
}


//retornar
//void => no retorna valores
//
export function saludar():void{
    console.log("HOla");
}