class Usuario {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    iniciarSesion(): void {
        console.log(this.nombre, "ha iniciado sesión.");
    }
}

class Profesor extends Usuario {
    dictarCurso(): void {
        console.log(this.nombre, "está subiendo un nuevo curso.");
    }
}

let profe = new Profesor("Kevin");
profe.iniciarSesion();
profe.dictarCurso();