/**
 * funciones
 */
function myFunction () {
    document.getElementById ("demo3").innerHTML="Miguel Castro ";
    
}
/** FUNCION PARA capturar los datos */

function datos(){
    let titulo= document.getElementById("titulo").value;
    let autor= document.getElementById("autor").value;
    let resul= unir(titulo,autor);
    document.getElementById("msj").innerHTML=resul;



}
/**funtion para unir una cadena de tezxto */

function unir(titulo,autor){
return"titulo" + titulo + "</br>" + "autor"+autor
}
/** EJEMPLO CON EL OBEJTO MATH */

function redondearNumero(){
    let num = document.getElementById("numero").value;
     /** convertir a numero y deondear */
    let redondeo=Math.round(Number(num));

     document.getElementById("resul").innerHTML=
     "el numero redondeado es" + redondeo;
}