import Swal from "sweetalert2";

//declarando el arreglo para guardar los cursos
let arregloCarrito = [];
/**Accedemos al tbody especificando en la tabla que se encuentran con su 
 * id
 */
const bodyCarrito = document.querySelector('#lista-carrito tbody');
export function agregarCurso(e){
    //classList
    //Validamos los elementos html que contengan la clase 'button-carrito'
    if(e.target.classList.contains('button-carrito')){//true or false
        //seleccionar los elementos que contenga el boton
        //Seleccionamos el padre de la etiqueta button
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);

        //Una vez seleccionado el curso vamos a deshabilitar el boton
        //Agregando una clase => classList.add()

        e.target.classList.add('disabled');

        //Cambiando el text del boton

        e.target.textContent = 'Ir al carrito'

        //Asignamos una alerta

        Swal.fire({
            icon: "success",
            title: "Agregaste un curso!",
            showConfirmButton: false,
            timer: 1500
        });
        //Llamamos la funcion para leer los datos del curso
        leerDatosCurso(cursoSeleccionado);
    }
}

//función para leer los datos del curso

function leerDatosCurso(curso){
    //convertimos la información del curso en un objeto
    const objetoCurso = {
        //Clave - valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }
    //console.log(objetoCurso);

    //agregar elementos al arreglo
    arregloCarrito.push(objetoCurso);
    console.log(arregloCarrito)

    //Una ves agregado los cursos al arreglo dibujamos en la tabla
    carritoHTML();
}

//Iterar el arreglo de los cursos en la tabla html

function carritoHTML(){
    //Resetear el tbody

    bodyCarrito.innerHTML = ""


    //Iterando un arreglo
    //Función map solo para iterar arreglos
    arregloCarrito.map(curso =>{
        //creando una fila (tr)
        const fila = document.createElement('tr');
        //Dibujando las celdas de cada fila

        //Manera de concatenar (Interpolación de cadenas)
        fila.innerHTML = `
        <td>
        <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
        <a href="#" class="borrar_curso" data-id=${curso.id}>Eliminar</a>
        </td>
        `;
        //Insertandp las filas en el tbody
        bodyCarrito.appendChild(fila)
    })
}


//función para eliminar un curso por su id
export function eliminarCurso(e){
    if(e.target.classList.contains('borrar_curso')){
        //obtenemos el data-id del curso que selecciono la persona
        const cursoId = e.target.getAttribute('data-id'); //id

        //boton que voy habilitar si se elimina el curso
        const habilitarBoton = document.querySelector(`button[data-id="${cursoId}"]`)//button con el id que la persona selecciono
        console.log(habilitarBoton);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                //Filtrar los cursos que sean diferentes al id seleccionado
                arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              //Condicionamos para habilitar el boton

              if(habilitarBoton){
                //Removemos la clase "disabled"
                habilitarBoton.classList.remove("disabled");
                //Cambiamos el texto
                habilitarBoton.textContent = "Agregar al carrito"

              }

              //Una ves filtrado actualiza el html
              carritoHTML();
            }
        });
    }
}

// Función para vaciar el carrito
export function vaciarCarrito() {
    arregloCarrito = [];
    carritoHTML();

    const botonesAgregar = document.querySelectorAll('.button-carrito');
    botonesAgregar.forEach(boton => {
        boton.classList.remove('disabled');
        boton.textContent = 'Agregar al carrito';
    });


    Swal.fire({
        icon: "success",
        title: "Carrito vaciado",
        text: "Has vaciado tu carrito.",
        showConfirmButton: false,
        timer: 1500
    });
}

//con esta función vamos a calcular el total a pagar de los cursos seleccionados en el carrito
export function calcularTotal() {
    return arregloCarrito.reduce((acum, curso) => acum + parseFloat(curso.precio.replace('$', '')), 0);
}

//con esta función vamos a guardar el pedido
export function guardarPedido() {
    if (arregloCarrito.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Carrito vacío",
            text: "Agrega cursos antes de realizar un pedido.",
        });
        return;
    }
    
    const total = calcularTotal();
    Swal.fire({
        icon: "success",
        title: "Pedido guardado",
        text: `Total a pagar: $${total.toFixed(2)}`,
    });

    const botonesAgregar = document.querySelectorAll('.button-carrito');
    botonesAgregar.forEach(boton => {
        boton.classList.remove('disabled');
        boton.textContent = 'Agregar al carrito';
    });
}
