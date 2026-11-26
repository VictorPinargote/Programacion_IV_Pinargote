abstract class MetodoPago {
    public titular: string;

    constructor(titular: string) {
        this.titular = titular;
    }

    public mostrarTitular(): void {
        console.log("Titular de la cuenta: " + this.titular);
    }

    abstract procesarPago(monto: number, curso: string): boolean;
}

class PagoTarjeta extends MetodoPago {
    private numeroTarjeta: string;

    constructor(titular: string, numeroTarjeta: string) {
        super(titular);
        this.numeroTarjeta = numeroTarjeta;
    }

    public procesarPago(monto: number, curso: string): boolean {
        console.log("Procesando pago con tarjeta (" + this.numeroTarjeta + ") para el curso: " + curso + " por $" + monto);
        return true;
    }
}

class PagoTransferencia extends MetodoPago {
    private banco: string;

    constructor(titular: string, banco: string) {
        super(titular);
        this.banco = banco;
    }

    public procesarPago(monto: number, curso: string): boolean {
        console.log("Registrando transferencia desde " + this.banco + " para el curso: " + curso + " por $" + monto);
        return true;
    }
}

const pago1 = new PagoTarjeta("Joel Pinargote", "**** 4512");
pago1.mostrarTitular();
pago1.procesarPago(40, "Desarrollo Web");

const pago2 = new PagoTransferencia("Carlos Perez", "Banco Pichincha");
pago2.mostrarTitular();
pago2.procesarPago(30, "Bases de Datos");