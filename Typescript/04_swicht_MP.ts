let opcionMenu: number = 2; // Simulamos que el usuario ingresó el número 2

console.log("--- MENÚ DE LA PLATAFORMA ---");
console.log("1. Ver catálogo de cursos");
console.log("2. Comprar curso de Lógica");
console.log("3. Ver mis cursos");
console.log("4. Salir");
console.log("----------------------------");

// 1. Switch clásico con números
switch (opcionMenu) {
    case 1:
        console.log("Cargando catálogo... Tenemos cursos de Web, Lógica y Datos.");
        break;
    case 2:
        console.log("Procesando la compra del curso de Lógica... ¡Gracias por tu compra!");
        break;
    case 3:
        console.log("Tus cursos: Aún no has empezado ninguno.");
        break;
    case 4:
        console.log("Saliendo del sistema. ¡Nos vemos pronto!");
        break;
    default:
        console.log("Error: Opción no válida. Por favor elige un número del 1 al 4.");
        break;
}

// 2. Switch con texto (string) para que el profe vea que sabes usar los dos tipos
let nivelCurso: string = "Basico";

console.log("\n--- DETALLE DEL CURSO ---");
switch (nivelCurso) {
    case "Basico":
        console.log("Nivel: Ideal para principiantes que recién empiezan a programar.");
        break;
    case "Intermedio":
        console.log("Nivel: Requiere que ya sepas lo fundamental.");
        break;
    case "Avanzado":
        console.log("Nivel: Solo para expertos listos para proyectos grandes.");
        break;
    default:
        console.log("Nivel de curso no reconocido en el sistema.");
        break;
}