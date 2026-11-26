fun main() {
    print("Cuantas ventas de cursos deseas registrar hoy: ")
    val cantidadVentas: Int = readln().toInt()

    var totalIngresos: Double = 0.0
    var ventasDestacadas: Int = 0

    for (i in 1..cantidadVentas) {
        print("Ingresa el monto de la venta #$i: ")
        val monto: Double = readln().toDouble()

        totalIngresos += monto

        if (monto >= 50.0) {
            ventasDestacadas++
        }
    }

    val promedioVenta: Double = if (cantidadVentas > 0) totalIngresos / cantidadVentas else 0.0

    println("Total recaudado: $$totalIngresos")
    println("Promedio por venta: $$promedioVenta")
    println("Ventas mayores o iguales a $50: $ventasDestacadas")
}