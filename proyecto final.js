
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35
var salario_recargo = 0.05

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

var continuar = prompt ("Bienvendido, para continuar ingrese: continuar", "Para salir, ingrese: salir")
while ("CONTINUAR" == continuar.toUpperCase) {
    //Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?","si/no")
var cantidad_hijos
if ("SI" == hijos.toUpperCase()){
  cantidad_hijos = ("Ingrese cantidad de hijos")
}
var cantidad_hijos_numero = 0 
if ("SI" == hijos.toUpperCase()){
    var cantidad_hijos_numero = parseInt(cantidad_hijos)
}

var propiedades = prompt("¿Tiene propiedades?", "si/no")
var cantidad_propiedades
if ("SI" == propiedades.toUpperCase()){
    cantidad_propiedades = prompt ("Cuantas propiedades tiene?")
}
var cantidad_propiedades_numero = 0 
if ("SI" == propiedades.toUpperCase()){
    cantidad_propiedades_numero = parseInt(cantidad_propiedades)
}

var salario = prompt("¿Es asalariado?", "si/no")
var cantidad_salario
if ("SI" == salario.toUpperCase()){
    cantidad_salario = prompt ("Ingrese su salario mensual")
}
var cantidad_salario_numero = 0 
if ("SI" == salario.toUpperCase()){
    cantidad_salario_numero = parseInt(cantidad_salario)
}

//Recargo asegurado
if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
} else if (edad_numero >=25 && edad_numero<49){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
} else if (edad_numero >= 50){
    recargo = precio_base *edad_50
    recargo_total = recargo_total + recargo
}
//Recargo conyuge
if (edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    recargo = precio_base * casado_18
    recargo_total = recargo_total + recargo
} else if (edad_conyuge_numero>= 25 && edad_conyuge_numero<49){
    recargo = precio_base * casado_25
    recargo_total = recargo_total + recargo
} else if (edad_conyuge_numero>=50){
    recargo = precio_base * casado_50
    recargo_total = recargo_total + recargo
}
//Recargo hijo
if (cantidad_hijos_numero > 0){
    recargo = precio_base * hijos_recargo
    recargo_total = recargo_total + recargo
}

// Recargo propiedades
if (cantidad_propiedades_numero > 0){
    recargo = precio_base * propiedades_recargo
    recargo_total = recargo_total + recargo
}

// Recargo salario
if (cantidad_salario_numero > 0){
    recargo = precio_base * salario_recargo
    recargo_total = recargo_total + recargo
}

//Recargo total
precio_final = precio_base + recargo_total

alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

var continuar = prompt ("¿Desea continuar?")
} alert ("Gracias por ultilizar el sistema")
