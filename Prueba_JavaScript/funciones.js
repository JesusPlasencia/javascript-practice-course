// ! EJEMPLO 1
// ! Que es una funcion
// Una herramienta, que nos permite colocar una entrada y nos devuelve una salida o una tarea
// ! Cuando me sirve usar una funcion en nuestro codigo
// Cuando tengo una estructura de ejecucion repetida en nuestro codigo, nos ayuda a ahorrar codigo
// ! Diferencia entre Parametros y argumentos
// Parametros son las variables que las funcion declarada va a usar, y los argumentos son las variables inicializadas


// ! EJEMPLO 2
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function CallUser(name, lastname, nickname) {
    let completeName = name + " " + lastname;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}

CallUser("Juan David", "Castro Gallego", "juandc")