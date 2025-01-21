'use strict'

const inputNombre = document.querySelector('#amigo');
const labelResultado = document.querySelector('#resultado');
const labelListaAmigo = document.querySelector('#listaAmigos');

let listaUsuario = [];

const limpiarInput = () => {
    inputNombre.value = "";
}

const mostrarAmigos = () => {
    let amigos = document.createElement('li');
    for (let i = 0; i < listaUsuario.length; i++) {
        amigos.innerHTML = `${listaUsuario[i]}<br>`;
    }
    labelListaAmigo.append(amigos);
}

const agregarAmigo = () => {
    labelResultado.innerHTML="";
    if (isNaN(inputNombre.value) && inputNombre != "") {
        listaUsuario.push(inputNombre.value);
        mostrarAmigos(listaUsuario);
    } else {
        alert('INGRESO NO VALIDO, RECUEDE INGRESAR UN NOMBRE');
    }
    limpiarInput();
}