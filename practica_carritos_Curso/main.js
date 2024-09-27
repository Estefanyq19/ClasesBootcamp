import 'bootstrap/dist/css/bootstrap.min.css';
import './public/assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { agregarCurso, eliminarCurso, vaciarCarrito, guardarPedido } from './src/components/carrito';

//Evento de escucha cuando se recarga la página

document.addEventListener('DOMContentLoaded',() =>{
  //llamando el elemento main
const listadoCursos = document.querySelector('#lista-cursos');//main

  //llamando el elemento table

  const tablaCursos = document.querySelector('#lista-carrito');//Etiqueta table



  //alojar todos los eventos para el carrito
  /**Mandamos un evento de escucha al contenido del main
   * cuando la persona le de click se ejecuta la función agregar curso
   */
  listadoCursos.addEventListener('click',agregarCurso);

  //Evento de escucha para ejecutar la función "eliminarCurso"
  tablaCursos.addEventListener('click',eliminarCurso)

  //Evento para vaciar el carrito
  const btnVaciarCarrito = document.getElementById('vaciar-carrito');
  btnVaciarCarrito.addEventListener('click', vaciarCarrito)

  //Creando el botón para guardar el pedido
  const btnGuardarPedido = document.createElement('a');
  btnGuardarPedido.id = 'guardar-pedido';
  btnGuardarPedido.className = 'btn btn-sm btn-success mx-2';
  btnGuardarPedido.textContent = 'Guardar Pedido';
  document.querySelector('#carrito').appendChild(btnGuardarPedido);

  //Evento para guardar
  btnGuardarPedido.addEventListener('click',guardarPedido);
})