class CuentaEstudiante {
    public usuario: string;
    private saldo: number;

    constructor(usuario: string, saldoInicial: number) {
        this.usuario = usuario;
        this.saldo = saldoInicial;
    }

    public verSaldo(): number {
        return this.saldo;
    }

    public descontarCurso(precio: number): void {
        this.saldo = this.saldo - precio;
    }
}

let cuenta = new CuentaEstudiante("Joel", 50);
cuenta.descontarCurso(20);
console.log("Saldo disponible: $", cuenta.verSaldo());