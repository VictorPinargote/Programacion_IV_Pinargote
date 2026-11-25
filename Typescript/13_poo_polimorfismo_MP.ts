interface Vendible {
    readonly titulo: string;
    obtenerPrecioFinal(): number;
}

interface Certificable {
    emitirCertificado(estudiante: string): string;
}

class CursoEnVivo implements Vendible, Certificable {
    constructor(
        public readonly titulo: string,
        private precioBase: number,
        private cuposDisponibles: number
    ) {}

    obtenerPrecioFinal(): number {
        return this.cuposDisponibles > 0 ? this.precioBase : 0;
    }

    emitirCertificado(estudiante: string): string {
        return `Certificado emitido a ${estudiante} por completar ${this.titulo}`;
    }
}

const cursoRN = new CursoEnVivo("React Native Practico", 50, 10);
console.log(cursoRN.titulo);
console.log(cursoRN.obtenerPrecioFinal());
console.log(cursoRN.emitirCertificado("Victor"));