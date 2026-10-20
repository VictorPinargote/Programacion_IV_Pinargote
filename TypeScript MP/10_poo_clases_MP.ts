class CursoOnline {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(): void {
        console.log("Curso:", this.nombre, "- Precio: $", this.precio);
    }
}

let miCurso = new CursoOnline("TypeScript desde Cero", 25);
miCurso.mostrarInfo();