fun main() {
    val carritoCursos: MutableList<String> = mutableListOf(
        "Kotlin desde Cero",
        "TypeScript POO"
    )

    carritoCursos.add("React Native Practico")
    carritoCursos.add("Bases de Datos SQL")
    println("Cursos agregados al carrito: $carritoCursos")

    carritoCursos.remove("TypeScript POO")
    carritoCursos[0] = "Kotlin Avanzado"

    println("Carrito actualizado (${carritoCursos.size} cursos):")
    for (curso in carritoCursos) {
        println("- $curso")
    }
}