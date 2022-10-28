// ! EJEMPLO 1
// ! Que es una condicional
// Una pregunta que espera ser respondida, en este caso, cuando la respuesta es verdadera su valor es true y lo contrario es false
// ! Cuantas condicionales hay en JS y cuales son sus diferencias
// if else-> existen 2 posibilidades
// if else-if else -> existen muchas posibilidades
// switch -> solo cuando se cumplen ciertos valores
// ! Se puede combinar funciones y condicionales
// Si, se pueden combinar

// ! EJEMPLO 2
const tipoDeSuscripcion = "Basic";
// ! Con switch
// switch (tipoDeSuscripcion) {
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         break;
//     case "Expert":
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         break;
//     case "ExpertPlus":
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         break;
// }
// ! Con if, else, else if
if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes una suscripcion valida.");
}