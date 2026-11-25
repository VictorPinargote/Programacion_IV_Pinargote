function iniciarPlataforma(): void {
    console.log("=== BIENVENIDO A LA TIENDA DE CURSOS ===");
}

function mostrarCurso(nombre: string, precio: number): void {
    console.log("Curso: " + nombre + " | Precio: $" + precio);
}

function calcularIva(precio: number): number {
    let iva: number = precio * 0.15;
    return iva;
}

function calcularTotalConDescuento(precio: number, descuento?: number): number {
    if (descuento) {
        return precio - descuento;
    }
    return precio;
}

function inscribirEstudiante(estudiante: string, curso: string, modalidad: string = "Virtual"): string {
    return "Estudiante " + estudiante + " inscrito en " + curso + " (" + modalidad + ")";
}

const verificarSaldo = (saldo: number, precioCurso: number): boolean => {
    if (saldo >= precioCurso) {
        return true;
    } else {
        return false;
    }
};

const sumarPrecios = (precios: number[]): number => {
    let total: number = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
};

function listarCatalogo(cursos: string[], precios: number[]): void {
    console.log("\n--- CATALOGO DE CURSOS ---");
    for (let i = 0; i < cursos.length; i++) {
        console.log((i + 1) + ". " + cursos[i] + " - $" + precios[i]);
    }
}

function procesarCompraCurso(
    estudiante: string,
    curso: { nombre: string; precio: number; cupos: number },
    saldo: number
): void {
    console.log("\n--- PROCESANDO COMPRA ---");
    if (curso.cupos > 0) {
        if (verificarSaldo(saldo, curso.precio)) {
            let nuevoSaldo: number = saldo - curso.precio;
            curso.cupos--;
            console.log("Compra exitosa para " + estudiante);
            console.log("Curso adquirido: " + curso.nombre);
            console.log("Saldo restante: $" + nuevoSaldo);
            console.log("Cupos disponibles ahora: " + curso.cupos);
        } else {
            console.log("Saldo insuficiente para comprar " + curso.nombre);
        }
    } else {
        console.log("No hay cupos disponibles en " + curso.nombre);
    }
}

iniciarPlataforma();

mostrarCurso("Logica de Programacion", 25);
mostrarCurso("Desarrollo Web", 40);

let ivaCurso: number = calcularIva(40);
console.log("IVA del curso Web: $" + ivaCurso);

console.log("Total sin descuento: $" + calcularTotalConDescuento(50));
console.log("Total con descuento: $" + calcularTotalConDescuento(50, 10));

console.log(inscribirEstudiante("Joel Pinargote", "TypeScript Basico"));
console.log(inscribirEstudiante("Carlos Perez", "React Native", "Presencial"));

let listaCursos: string[] = ["Logica", "Web", "Bases de Datos", "React Native"];
let listaPrecios: number[] = [25, 40, 30, 45];

listarCatalogo(listaCursos, listaPrecios);
let totalCarrito: number = sumarPrecios(listaPrecios);
console.log("Total por llevar todos los cursos: $" + totalCarrito);

let cursoSeleccionado = {
    nombre: "React Native",
    precio: 45,
    cupos: 5
};

procesarCompraCurso("Joel Pinargote", cursoSeleccionado, 100);