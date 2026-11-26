class CuentaEstudiante(
    val nombre: String,
    saldoInicial: Double
) {
    private var saldo: Double = if (saldoInicial >= 0.0) saldoInicial else 0.0

    fun consultarSaldo(): Double {
        return saldo
    }

    fun recargarSaldo(monto: Double) {
        if (monto > 0.0) {
            saldo += monto
        }
    }

    fun comprarCurso(nombreCurso: String, precio: Double): Boolean {
        return if (precio > 0.0 && saldo >= precio) {
            saldo -= precio
            println("$nombre compro el curso: $nombreCurso")
            true
        } else {
            println("Saldo insuficiente para adquirir $nombreCurso")
            false
        }
    }
}

fun main() {
    val estudiante = CuentaEstudiante("Victor", 50.0)
    estudiante.recargarSaldo(25.0)
    estudiante.comprarCurso("Kotlin Avanzado", 60.0)
    println("Saldo disponible: $${estudiante.consultarSaldo()}")
}