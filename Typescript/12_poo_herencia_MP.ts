class Curso {
    public titulo: string;
    public precio: number;

    constructor(titulo: string, precio: number) {
        this.titulo = titulo;
        this.precio = precio;
    }

    public mostrarResumen(): void {
        console.log("Curso: " + this.titulo + " | Precio base: $" + this.precio);
    }
}

class CursoGrabado extends Curso {
    public horasVideo: number;

    constructor(titulo: string, precio: number, horasVideo: number) {
        super(titulo, precio);
        this.horasVideo = horasVideo;
    }

    public verDuracion(): void {
        console.log(this.titulo + " tiene " + this.horasVideo + " horas de video grabadas.");
    }
}

class CursoEnVivo extends Curso {
    public horario: string;

    constructor(titulo: string, precio: number, horario: string) {
        super(titulo, precio);
        this.horario = horario;
    }

    public verHorario(): void {
        console.log(this.titulo + " se dicta en vivo: " + this.horario);
    }
}

const curso1 = new CursoGrabado("Logica de Programacion", 25, 12);
curso1.mostrarResumen();
curso1.verDuracion();

const curso2 = new CursoEnVivo("React Native", 45, "Sabados 09:00");
curso2.mostrarResumen();
curso2.verHorario();