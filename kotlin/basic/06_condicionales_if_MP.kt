fun main() {
    print("Ingresa el cupo disponible del curso: ")
    val cupos: Int = readln().toInt()

    print("Ingresa la cantidad de cupos que deseas comprar: ")
    val solicitados: Int = readln().toInt()

    if (solicitados <= 0) {
        println("La cantidad debe ser mayor a cero")
    } else if (solicitados <= cupos) {
        val restantes: Int = cupos - solicitados
        println("Compra aprobada. Cupos restantes: $restantes")
    } else {
        println("No hay suficientes cupos disponibles")
    }
}