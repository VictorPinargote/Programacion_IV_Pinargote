open class CursoBase(
    val titulo: String,
    val precio: Double
) {
    open fun mostrarDetalle() {
        println("Curso: $titulo | Precio: $$precio")
    }
}

class CursoEnVivo(
    titulo: String,
    precio: Double,
    val horario: String
) : CursoBase(titulo, precio) {
    override fun mostrarDetalle() {
        println("Curso en Vivo: $titulo | Precio: $$precio | Horario: $horario")
    }
}

fun main() {
    val cursoGrabado = CursoBase("SQL desde Cero", 30.0)
    val cursoLive = CursoEnVivo("Kotlin y Android", 55.0, "Lunes y Miercoles 19:00")

    cursoGrabado.mostrarDetalle()
    cursoLive.mostrarDetalle()
}