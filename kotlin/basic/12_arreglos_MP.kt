fun main() {
    val cursosDisponibles: Array<String> = arrayOf("Kotlin Basico", "TypeScript POO", "React Native", "SQL Avanzado")
    val preciosCursos: DoubleArray = doubleArrayOf(35.0, 40.0, 50.0, 30.0)

    println("Total de cursos en el catalogo: ${cursosDisponibles.size}")
    println("Primer curso: ${cursosDisponibles[0]} - Precio: $${preciosCursos[0]}")

    preciosCursos[0] = 32.0
    println("Precio actualizado de ${cursosDisponibles[0]}: $${preciosCursos[0]}")

    for (i in cursosDisponibles.indices) {
        println("${i + 1}. ${cursosDisponibles[i]} -> $${preciosCursos[i]}")
    }
}