fun main() {
    val nombreCurso: String = "Desarrollo Android con Kotlin"
    var cuposDisponibles: Int = 25
    val precioCurso: Double = 49.99
    var estaActivo: Boolean = true

    println("Curso: $nombreCurso")
    println("Precio: $$precioCurso")
    println("Cupos iniciales: $cuposDisponibles")

    cuposDisponibles -= 1
    println("Cupos despues de una venta: $cuposDisponibles")
    println("Disponible para inscripcion: $estaActivo")
}