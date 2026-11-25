let cursosPublicados: number = 1;
console.log("--- PUBLICANDO CURSOS EN LA PLATAFORMA ---");
while (cursosPublicados <= 4) {
    console.log("Publicando curso #" + cursosPublicados);
    cursosPublicados++;
}

let catalogoCursos: string[] = ["Logica", "Web", "Bases de Datos", "React Native"];
let preciosCursos: number[] = [25, 30, 20, 40];
let i: number = 0;

console.log("\n--- CATALOGO DISPONIBLE ---");
while (i < catalogoCursos.length) {
    console.log("Curso: " + catalogoCursos[i] + " - Precio: $" + preciosCursos[i]);
    i++;
}

let saldoEstudiante: number = 80;
let totalComprados: number = 0;
let indiceCompra: number = 0;

console.log("\n--- SIMULACION DE COMPRA ---");
while (indiceCompra < preciosCursos.length) {
    if (saldoEstudiante >= preciosCursos[indiceCompra]) {
        saldoEstudiante -= preciosCursos[indiceCompra];
        totalComprados++;
        console.log("Compraste: " + catalogoCursos[indiceCompra] + " | Saldo restante: $" + saldoEstudiante);
    } else {
        console.log("Saldo insuficiente para: " + catalogoCursos[indiceCompra]);
        break;
    }
    indiceCompra++;
}

let intentosPago: number = 1;
console.log("\n--- VERIFICANDO PAGO ---");
do {
    console.log("Procesando intento de pago #" + intentosPago);
    intentosPago++;
} while (intentosPago <= 2);