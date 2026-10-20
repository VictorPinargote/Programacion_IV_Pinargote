// 03_condicionales.ts

let precioCursoWeb: number = 30;
let miSaldo: number = 25;
let edadEstudiante: number = 19;
let tieneCupon: boolean = true;

// 1. Condicional simple (if - else)
console.log("--- VERIFICANDO SALDO ---");
if (miSaldo >= precioCursoWeb) {
    console.log("Compra exitosa del curso Web.");
} else {
    console.log("Saldo insuficiente. Te faltan: $", precioCursoWeb - miSaldo);
}

// 2. Condicional múltiple (if - else if - else)
console.log("\n--- VERIFICANDO EDAD ---");
if (edadEstudiante >= 18) {
    console.log("Acceso total permitido a la plataforma.");
} else if (edadEstudiante >= 15) {
    console.log("Acceso permitido solo a cursos para adolescentes.");
} else {
    console.log("Acceso bloqueado. Necesitas un representante.");
}

// 3. Condicional con operadores lógicos AND (&&)
console.log("\n--- VERIFICACIÓN DOBLE ---");
if (miSaldo >= precioCursoWeb && edadEstudiante >= 18) {
    console.log("Cumples todo: Tienes dinero y eres mayor de edad.");
} else {
    console.log("Te falta saldo o no eres mayor de edad.");
}

// 4. Condicional con operador lógico OR (||)
console.log("\n--- APLICANDO DESCUENTOS ---");
if (miSaldo >= precioCursoWeb || tieneCupon === true) {
    console.log("Puedes llevarte el curso porque tienes saldo O tienes un cupón válido.");
} else {
    console.log("No puedes llevarte el curso de ninguna forma.");
}