const suscripcion = "Basic";
let tiposDeSuscripciones = [
    ["Free", "Solo puedes tomar los cursos gratis"],
    ["Basic", "Puedes tomar casi todos los cursos de Platzi durante un mes"],
    ["Expert", "Puedes tomar casi todos los cursos de Platzi durante un año"],
    ["ExpertPlus", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]
];
  
tiposDeSuscripciones.forEach(item => {
    if (item[0] === suscripcion) {
        console.log(item[1]);
    }
})