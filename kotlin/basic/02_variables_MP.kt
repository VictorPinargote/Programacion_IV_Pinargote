fun main() {
    val plataforma: String = "Academia MP"
    var cursoActual: String = "Kotlin desde Cero"
    val precioBase: Double = 45.0
    var cuposDisponibles: Int = 20
    var inscripcionesAbiertas: Boolean = true

    println("Plataforma: $plataforma")
    println("Curso: $cursoActual")
    println("Precio: $$precioBase")
    println("Cupos disponibles: $cuposDisponibles")
    println("Inscripciones abiertas: $inscripcionesAbiertas")

    cuposDisponibles = 19
    println("Cupos actualizados tras venta: $cuposDisponibles")
}