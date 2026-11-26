class CuentaEstudiante {
    public estudiante: string;
    private saldo: number;
    protected nivelAcceso: string;

    constructor(estudiante: string, saldoInicial: number, nivelAcceso: string = "Basico") {
        this.estudiante = estudiante;
        this.saldo = saldoInicial;
        this.nivelAcceso = nivelAcceso;
    }

    public recargarSaldo(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Saldo recargado: $" + monto + " | Saldo actual: $" + this.saldo);
        }
    }

    public comprarCurso(nombreCurso: string, precio: number): void {
        if (this.saldo >= precio) {
            this.saldo -= precio;
            console.log(this.estudiante + " compro " + nombreCurso + " | Saldo restante: $" + this.saldo);
        } else {
            console.log("Saldo insuficiente para comprar " + nombreCurso);
        }
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta1 = new CuentaEstudiante("Joel Pinargote", 60);
cuenta1.comprarCurso("Logica de Programacion", 25);
cuenta1.recargarSaldo(20);
cuenta1.comprarCurso("Desarrollo Web", 40);
console.log("Saldo final de " + cuenta1.estudiante + ": $" + cuenta1.consultarSaldo());