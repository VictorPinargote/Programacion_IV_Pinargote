interface CursoPlataforma {
    nombre: string;
    precio: number;
    mostrarTemario(): void;
    entregarCertificado(): void;
}

class CursoWeb implements CursoPlataforma {
    nombre = "Desarrollo Web";
    precio = 50;
    mostrarTemario(): void {
        console.log("El curso Web incluye HTML, CSS y TypeScript");
    };
    entregarCertificado(): void {
        console.log("Se entrega certificado de Desarrollador Web");
    }
}

class CursoDatos implements CursoPlataforma {
    nombre = "Bases de Datos";
    precio = 35;
    mostrarTemario(): void {
        console.log("El curso de Datos incluye SQL y modelado");
    };
    entregarCertificado(): void {
        console.log("Se entrega certificado de Administrador de Datos");
    }
}

const cursoWeb = new CursoWeb();
const cursoDatos = new CursoDatos();

cursoWeb.mostrarTemario();
cursoDatos.mostrarTemario();