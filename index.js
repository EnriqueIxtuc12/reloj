console.log("Hola mundo");
function tiemporeloj (){
var fechaactual= new Date ()
var horas= fechaactual.getHours();
var minutos=fechaactual.getMinutes();
var segundos=fechaactual.getSeconds();
console.log(fechaactual);
console.log(minutos);
console.log(horas);
console.log(segundos);

var conexion = document.querySelector('#reloj');
var horareloj= horas+ ":" + minutos+ ":"+ segundos;
conexion.innerHTML = horareloj;}

setInterval(tiemporeloj, 1000)