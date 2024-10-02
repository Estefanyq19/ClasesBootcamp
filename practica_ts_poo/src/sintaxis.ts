export default function sintaxis(){
    //declaración de variables y constantes
    let nombre:string = "Kenia";
    let edad:number = 25;
    let decimal:number = 105.67;
    let isEstudiante:boolean;
    let nulo:null=null;

    //variable que reciba más de un tipo de dato
    let valor:number | string;
    valor = "hola"; //tipo de dato
    console.log(`Valor: ${valor}, Tipo de dato: ${typeof(valor)}`);
    valor=54;
    console.log(`Valor: ${valor}, Tipo de dato: ${typeof(valor)}`);    


    //variable que puede devolver cualquier tipo de dato

    let dato:any;
    dato = true;
    console.log(dato);

    //ARREGLOS; OBJETOS; INTERFACES
    let frutas:string[]=["fresa","manzana","pera","uva"];
    console.log(frutas);


    //Clave - valor(declarando un objeto)
    let persona:object = {
        nombre: "Kenia",
        apellido: "paiz",
        telefono: 3232,
        hobbies: ["ver tele","leer","dibujar"]
    }
    console.log(persona);
    
    //tuplas / interfaces
    //Tuplas(condiciones => longitud predeterminada)
    //pueden servir cuando sabemos que los datos son fijos
    let coordenadas: [number, number] = [12-45,45.33]
    console.log(coordenadas);

}