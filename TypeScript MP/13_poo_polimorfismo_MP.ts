class CursoGeneral {
    calcularPrecio(): void {
        console.log("El precio estándar es $25");
    }
}

class CursoVip extends CursoGeneral {
    calcularPrecio(): void {
        console.log("El precio VIP con certificado es $50");
    }
}

let basico = new CursoGeneral();
let vip = new CursoVip();
basico.calcularPrecio();
vip.calcularPrecio();