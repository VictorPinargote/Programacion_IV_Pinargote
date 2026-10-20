console.log("--- CATÁLOGO DE CURSOS ---");

// Arreglos con los datos de nuestros cursos
let listaCursos: string[] = ["Lógica de Programación", "Desarrollo Web", "Bases de Datos", "Python Básico"];
let precios: number[] = [25, 30, 20, 35];

// 1. Ciclo for básico para mostrar todos los cursos de la lista
for (let i = 0; i < listaCursos.length; i++) {
    // i va sumando de 1 en 1, así que recorre todo el arreglo
    console.log("Opción " + i + ": " + listaCursos[i] + " - Precio: $" + precios[i]);
}

// 2. Otro ciclo for simple para simular un proceso repetitivo
let cursosAComprar: number = 3;

console.log("\n--- PROCESANDO TUS COMPRAS ---");
for (let j = 1; j <= cursosAComprar; j++) {
    console.log("Inscribiendo en el curso número " + j + "...");
}

console.log("¡Listo! Ya estás inscrito en tus cursos.");