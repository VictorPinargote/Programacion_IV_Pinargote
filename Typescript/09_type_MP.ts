type NivelCurso = "Basico" | "Intermedio" | "Avanzado";
type MetodoPago = "Tarjeta" | "Transferencia" | "Efectivo";

type Curso = {
    id: number;
    nombre: string;
    precio: number;
    nivel: NivelCurso;
    disponible: boolean;
};

type Compra = {
    estudiante: string;
    curso: Curso;
    pago: MetodoPago;
};

const curso1: Curso = {
    id: 1,
    nombre: "Logica de Programacion",
    precio: 25,
    nivel: "Basico",
    disponible: true
};

const compra1: Compra = {
    estudiante: "Joel Pinargote",
    curso: curso1,
    pago: "Transferencia"
};

console.log("Curso:", curso1);
console.log("Detalle de compra:", compra1);