fun main() {
    print("Ingresa el monto total de la compra de cursos: ")
    val montoCompra: Double = readln().toDouble()

    print("El estudiante tiene membresia VIP (true/false): ")
    val esVip: Boolean = readln().toBoolean()

    val porcentajeDescuento: Double = if (montoCompra >= 100.0 && esVip) {
        0.25
    } else if (montoCompra >= 100.0 || esVip) {
        0.15
    } else if (montoCompra >= 50.0) {
        0.05
    } else {
        0.0
    }

    val descuento: Double = montoCompra * porcentajeDescuento
    val totalFinal: Double = montoCompra - descuento

    println("Descuento aplicado: $$descuento")
    println("Total final a pagar: $$totalFinal")
}