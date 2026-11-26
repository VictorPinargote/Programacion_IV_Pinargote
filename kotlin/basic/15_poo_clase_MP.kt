class Curso(
    val titulo: String,
    val instructor: String,
    var precio: Double,
    var cupos: Int
) {
    fun mostrarInformacion() {
        println("Curso: $titulo | Instructor: $instructor | Precio: $$precio | Cupos: $cupos")
    }

    fun venderCupo(): Boolean {
        return if (cupos > 0) {
            cupos--
            true
        } else {
            false
        }
    }
}

fun main() {
    val cursoKotlin = Curso("Kotlin para Android", "Ing. Pinargote", 45.0, 2)
    cursoKotlin.mostrarInformacion()

    if (cursoKotlin.venderCupo()) {
        println("Venta realizada con exito")
    }
    cursoKotlin.mostrarInformacion()
}