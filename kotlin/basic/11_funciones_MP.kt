fun calcularTotalConDescuento(precio: Double, cantidad: Int, porcentajeDescuento: Double): Double {
    val subtotal: Double = precio * cantidad
    val descuento: Double = subtotal * (porcentajeDescuento / 100.0)
    return subtotal - descuento
}

fun mostrarDetalleVenta(curso: String, total: Double) {
    println("Curso vendido: $curso")
    println("Total final a pagar: $$total")
}

fun main() {
    val cursoSeleccionado: String = "Kotlin desde Cero"
    val totalPagar: Double = calcularTotalConDescuento(45.0, 2, 10.0)
    mostrarDetalleVenta(cursoSeleccionado, totalPagar)
}