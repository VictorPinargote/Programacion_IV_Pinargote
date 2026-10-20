console.log("--- TIENDA DE CURSOS ONLINE ---");

// Pedimos datos al usuario con prompt (nivel estudiante)
let nombreEstudiante: string | null = prompt("¿Cuál es tu nombre?");
let opcionElegida: string | null = prompt("Ingresa el número del curso que deseas comprar (1. Lógica, 2. Web, 3. Datos): ");

console.log("Estudiante: ", nombreEstudiante);

// Usamos el switch pero simplificado
switch (opcionElegida) {
    case "1":
        console.log("¡Felicidades! Compraste el curso de Lógica.");
        break;
    case "2":
        console.log("¡Felicidades! Compraste el curso Web.");
        break;
    case "3":
        console.log("¡Felicidades! Compraste el curso de Bases de Datos.");
        break;
    default:
        console.log("Error: Ese número de curso no existe.");
        break;
}