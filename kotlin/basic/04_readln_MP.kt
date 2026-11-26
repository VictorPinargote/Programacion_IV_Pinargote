fun main() {
    print("Ingresa el nombre del estudiante: ")
    val estudiante: String = readln()

    print("Ingresa el curso a comprar: ")
    val curso: String = readln()

    print("Ingresa la cantidad de cupos: ")
    val cupos: Int = readln().toInt()

    println("Inscripcion registrada")
    println("Estudiante: $estudiante")
    println("Curso: $curso")
    println("Cupos reservados: $cupos")
}