// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    

    var array =  [1,2,3,4,5,6,7,8,9,10];



    var suma = 0;

    for (var i = 0; i < array.length ; i ++){

suma += array[i]

    }
   
    return suma
    
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
 
  var pares = array.filter(numeros => numeros % 2 === 0)

  return pares

}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:


const cuadrado = array.map(function(elevados){
	
	
	 return  elevados ** 2
	
})

return cuadrado
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  let maquinaAcumuladora = array.reduce((acumulador,numeroActual) => {

    return acumulador + numeroActual
    
    
        },)
    
        return maquinaAcumuladora
/*
  var suma = 0

for(var i = 0; i < array.length; i ++) {

  suma += array[i]

}

return suma
*/

}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:

  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
