/**Elabore un algoritmo para una tienda de café que tenga una promoción de descuento para vender al por mayor, 
esto dependerá del número de café que compre las personas, si son más o igual de 5 café pero menor o igual a 10 tendrán un 20% de descuento, 
si compra más de 10 pero menor o igual a 20 tendrán un 40% de descuento, si compra más de 20 tendrá el 50% de descuento.

Nota: El precio del café es de $25.00 */

function calcularDescuento(cantidad){
    const NUM = parseFloat(cantidad);
    const PRECIO = 25;
    const PRECIO_SIN_DESC = PRECIO * NUM;
    let descuento = 0;

    if(NUM >= 5 && NUM <= 10){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.2)
        console.log("Obtuviste un descuento del 20% y tu total a pagar es " + descuento);
    }else if(NUM > 10 && NUM <= 20){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.4)
        console.log("Obtuviste un descuento del 40% y tu total a pagar es " + descuento);
    }else if(NUM > 20){
        descuento = PRECIO_SIN_DESC - (PRECIO_SIN_DESC * 0.5)
        console.log("Obtuviste un descuento del 50% y tu total a pagar es " + descuento);
    }else{
        console.log("Tu total a pagar es " + PRECIO_SIN_DESC);
    }
}
calcularDescuento(12);