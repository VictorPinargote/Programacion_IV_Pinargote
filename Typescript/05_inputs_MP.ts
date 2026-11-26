import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

console.log("--- TIENDA DE CURSOS ONLINE ---");

const nombreEstudiante = await rl.question("¿Cuál es tu nombre? ");
const opcionElegida = await rl.question("Ingresa el número del curso que deseas comprar (1. Lógica, 2. Web, 3. Datos): ");

console.log("Estudiante: ", nombreEstudiante);

switch (opcionElegida.trim()) {
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

rl.close();