fun main() {
    val precioCurso: Double = 50.0
    val cantidadCursos: Int = 3
    val descuentoCupon: Double = 15.0

    val subtotal: Double = precioCurso * cantidadCursos
    val totalPagar: Double = subtotal - descuentoCupon
    val promedioPorCurso: Double = totalPagar / cantidadCursos
    val hayCupoDisponible: Boolean = cantidadCursos <= 5 && totalPagar > 0

    println("Subtotal: $$subtotal")
    println("Total con descuento: $$totalPagar")
    println("Promedio por curso: $$promedioPorCurso")
    println("Compra valida: $hayCupoDisponible")
}