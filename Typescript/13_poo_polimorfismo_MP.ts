class Curso {
    public titulo: string;
    public precioBase: number;

    constructor(titulo: string, precioBase: number) {
        this.titulo = titulo;
        this.precioBase = precioBase;
    }

    public calcularPrecioFinal(): number {
        return this.precioBase;
    }

    public mostrarBeneficio(): void {
        console.log("Curso: " + this.titulo + " | Precio: $" + this.calcularPrecioFinal() + " | Acceso a clases.");
    }
}

class CursoEstandar extends Curso {
    public calcularPrecioFinal(): number {
        return this.precioBase;
    }

    public mostrarBeneficio(): void {
        console.log("Curso Estandar: " + this.titulo + " | Precio: $" + this.calcularPrecioFinal() + " | Acceso a videos y material base.");
    }
}

class CursoConCertificado extends Curso {
    public costoCertificado: number;

    constructor(titulo: string, precioBase: number, costoCertificado: number) {
        super(titulo, precioBase);
        this.costoCertificado = costoCertificado;
    }

    public calcularPrecioFinal(): number {
        return this.precioBase + this.costoCertificado;
    }

    public mostrarBeneficio(): void {
        console.log("Curso con Certificado: " + this.titulo + " | Precio: $" + this.calcularPrecioFinal() + " | Incluye certificado digital.");
    }
}

class CursoVip extends Curso {
    public costoMentoria: number;

    constructor(titulo: string, precioBase: number, costoMentoria: number) {
        super(titulo, precioBase);
        this.costoMentoria = costoMentoria;
    }

    public calcularPrecioFinal(): number {
        return this.precioBase + this.costoMentoria;
    }

    public mostrarBeneficio(): void {
        console.log("Curso VIP: " + this.titulo + " | Precio: $" + this.calcularPrecioFinal() + " | Incluye certificado y mentorias en vivo.");
    }
}

const cursosComprados: Curso[] = [
    new CursoEstandar("Logica de Programacion", 25),
    new CursoConCertificado("Desarrollo Web", 40, 10),
    new CursoVip("React Native", 50, 20)
];

for (let i = 0; i < cursosComprados.length; i++) {
    cursosComprados[i].mostrarBeneficio();
}