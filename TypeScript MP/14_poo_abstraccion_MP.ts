abstract class MetodoPago {
    abstract procesarPago(monto: number): void;
}

class PagoTarjeta extends MetodoPago {
    procesarPago(monto: number): void {
        console.log("Pagando con tarjeta el curso por: $", monto);
    }
}

let miPago = new PagoTarjeta();
miPago.procesarPago(30);