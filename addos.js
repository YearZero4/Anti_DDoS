var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1; 
var day = date.getDate();
var fecha1 = `${year}-${month}-${day}`;
if (!localStorage.getItem('fecha')) {
  localStorage.setItem('fecha', fecha1);
}
var fechaGuardada = localStorage.getItem('fecha');
if (fecha1 !== fechaGuardada) {
  localStorage.setItem('number', '1');
  localStorage.setItem('fecha', fecha1);
} else {
  var num = parseInt(localStorage.getItem('number')) || 0;
  num++;
  localStorage.setItem('number', num);
}

var intentos = parseInt(localStorage.getItem('number')) || 0;
if (intentos >= 10) {
location.href = 'https://access0denied.vercel.app/';
} 