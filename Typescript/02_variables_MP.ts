const saludo: string = "¡Hola Mundo! Bienvenido a la plataforma de cursos.";
console.log(saludo);

// constantes
const DESCUENTO : number = 10;
const IVA : number = 15;
const PLATAFORMA : string = "venta de cursos";
const ACTIVO : boolean = true;
console.log("Descuento: ", DESCUENTO);
console.log("Iva: ", IVA);

// variables
let vistas: number = 0;
console.log(vistas);
vistas = 5;
console.log(vistas);
vistas++;
console.log(vistas);
vistas += 5;
console.log(vistas);
vistas = vistas + 3;
console.log(vistas);

let estudiante: string = "Joel Pinargote";
let bloqueado: boolean = false;
console.log(estudiante);
console.log(bloqueado);

let misCursos: string[] = ["LOGICA", "WEB", "BASES DE DATOS"];
console.log(misCursos);

let cursoTerminado: string | null = null;
let cursoActual: string | undefined;

let puntosAcumulados: bigint = 98723982737392n;

let curso1: symbol = Symbol("Logica");
let curso2: symbol = Symbol("Logica");
console.log(curso1 === curso2);

let cursoBase: {
    nombre: string;
    nivel: number;
    horas: number;
    esGratis: boolean;
} = {
    nombre: "Logica de Programacion",
    nivel: 1,
    horas: 40,
    esGratis: false
};
console.log(cursoBase);