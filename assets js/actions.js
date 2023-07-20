const preguntas= prompt ("Seleccione que desea hacer: \n 1.- Calcular cuál número es mayor \n 2.- Sumar \n 3.-Restar\n 4.-Multiplicar\n 5.-Dividir\n 6.- Mostrar los números ingresados\n 7.-Salir")

   
        if (preguntas == 1 || preguntas == 2 || preguntas == 3|| preguntas == 4|| preguntas == 5|| preguntas == 6) {
    
                var numero1 = prompt ("Ingresa el primer número:")
                var numero2 = prompt ("ingresa el segundo número:")
            if (preguntas == 1) {
                numMayor (numero1,numero2)
            } else if (preguntas == 2) {
                sumar (numero1,numero2)
            } else if (preguntas ==3) {
                restar (numero1,numero2)
            } else if (preguntas == 4) {
                multiplicar (numero1,numero2)
            } else if (preguntas== 5) {
                dividir (numero1,numero2)
            } else if (preguntas == 6) {
                mostrar (numero1, numero2)
            }  
        } else if ( preguntas == 7) {
        alert ("Gracias por participar c:")
} else if(preguntas > 7) {
    alert ("Número ingresado no es válido")
}



function numMayor (primero,segundo) {
 
    if ( primero > segundo) {
        alert ( primero+ " " + "es mayor que"+" " +segundo) }
    else 
   alert ( segundo+ " " + "es menor que" +" " + primero) 
}


function sumar (primero,segundo) {

     alert (primero + segundo)
 }


function restar (primero,segundo) {

    alert (primero - segundo)
 }

function multiplicar (primero,segundo) {
   
    alert (primero * segundo)
 }

 function dividir (primero,segundo) {
  
    alert (primero / segundo)
 }

function mostrar (primero,segundo) {
  
    alert (`${primero} y ${segundo}`)
}

