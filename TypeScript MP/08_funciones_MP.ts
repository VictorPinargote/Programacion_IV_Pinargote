function saludarEstudiante(nombre: string): void {
    console.log("Bienvenido a la plataforma,", nombre);
}

function calcularTotal(precio: number, iva: number): number {
    return precio + iva;
}

saludarEstudiante("Joel");
let totalPagar: number = calcularTotal(25, 3);
console.log("Total a pagar: $", totalPagar);