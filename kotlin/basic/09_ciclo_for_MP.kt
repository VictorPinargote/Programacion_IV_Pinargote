fun main() {
    val totalCursos: Int = 5
    val precioUnitario: Double = 30.0
    var recaudacionAcumulada: Double = 0.0

    for (numeroCurso in 1..totalCursos) {
        recaudacionAcumulada += precioUnitario
        println("Venta #$numeroCurso registrada - Total acumulado: $$recaudacionAcumulada")
    }

    println("Recaudacion final del dia: $$recaudacionAcumulada")
}