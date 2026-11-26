fun main() {
    println("Categorias de cursos disponibles:")
    println("1. Desarrollo Movil")
    println("2. Desarrollo Web")
    println("3. Base de Datos")
    print("Elige una opcion (1-3): ")

    val opcion: Int = readln().toInt()

    val detalleCurso: String = when (opcion) {
        1 -> "Curso Kotlin y Android - Precio: $45.00"
        2 -> "Curso TypeScript y React - Precio: $40.00"
        3 -> "Curso SQL y Modelado - Precio: $35.00"
        else -> "Categoria no disponible en el catalogo"
    }

    println(detalleCurso)
}