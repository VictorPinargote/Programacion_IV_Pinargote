type Curso = {
    nombre: string;
    precio: number;
    activo: boolean;
};

let curso1: Curso = {
    nombre: "React Native Básico",
    precio: 30,
    activo: true
};

console.log("Curso creado con type:", curso1);