fun main() {
    print("Ingresa el nombre del curso: ")
    val curso: String = readln()

    print("Ingresa el precio del curso: ")
    val precio: Double = readln().toDouble()

    print("Ingresa el porcentaje de descuento (ej. 10.5): ")
    val porcentajeDescuento: Double = readln().toDouble()

    val montoDescuento: Double = precio * (porcentajeDescuento / 100.0)
    val precioFinal: Double = precio - montoDescuento

    println("Resumen de venta para $curso")
    println("Descuento aplicado: $$montoDescuento")
    println("Total a pagar: $$precioFinal")
}