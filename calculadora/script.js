
const pantalla = document.getElementById('pantalla');
let operacion = '';

function agregarNumero(v) { 
  pantalla.value += v; 
}

function operar(op) {
  if (pantalla.value !== '') {
    operacion = pantalla.value + ' ' + op + ' ';
    pantalla.value = '';
  }
}

function calcular() {
  try {
    pantalla.value = eval(operacion + pantalla.value);
    operacion = '';
  } catch {
    pantalla.value = 'Error';
  }
}

function elevarCuadrado() {
  if (pantalla.value !== '') {
    pantalla.value = Math.pow(parseFloat(pantalla.value), 2);
    operacion = '';
  }
}

function limpiar() {
  pantalla.value = '';
  operacion = '';
}
