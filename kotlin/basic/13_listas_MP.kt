fun main() {
    val catalogoCursos: List<String> = listOf(
        "Kotlin desde Cero",
        "TypeScript POO",
        "React Native Practico",
        "Bases de Datos SQL"
    )

    println("Total de cursos publicados: ${catalogoCursos.size}")
    println("Curso destacado: ${catalogoCursos.first()}")
    println("Ultimo curso agregado: ${catalogoCursos.last()}")

    val buscarCurso: String = "React Native Practico"
    if (catalogoCursos.contains(buscarCurso)) {
        println("El curso '$buscarCurso' esta disponible para la venta")
    }

    for (curso in catalogoCursos) {
        println("- $curso")
    }
}