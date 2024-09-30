//Creamos una nueva promesa
export const promise = new Promise((resolve, reject) => {
    //
    setTimeout(()=>{
        let operacion = true;
        if(operacion){
            resolve('Operacion Exitosa');
        }else{
            reject('Operacion Fallida');
        }
    },1000);//tiempo
})

console.log(promise);

//Validando si la promesa se cumple o no
//(then/catch)

promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})


/**Función asincronica ASINCRONISMO
 * que se maneje en segundo plano, que no afecte a las demás tareas que se están ejecutando, es algo que se va a ejecutar a "futuro"
 */