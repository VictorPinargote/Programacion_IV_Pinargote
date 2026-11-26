abstract class ProductoEducativo(
    val titulo: String,
    val precioBase: Double
) {
    abstract fun calcularAcceso(): String

    fun mostrarFicha() {
        println("Producto: $titulo | Precio: $$precioBase | Acceso: ${calcularAcceso()}")
    }
}

class CursoGrabado(
    titulo: String,
    precioBase: Double
) : ProductoEducativo(titulo, precioBase) {
    override fun calcularAcceso(): String {
        return "Acceso de por vida en plataforma"
    }
}

class SuscripcionMensual(
    titulo: String,
    precioBase: Double,
    val meses: Int
) : ProductoEducativo(titulo, precioBase) {
    override fun calcularAcceso(): String {
        return "Acceso ilimitado durante $meses meses"
    }
}

fun main() {
    val curso1: ProductoEducativo = CursoGrabado("Kotlin Profesional", 60.0)
    val plan1: ProductoEducativo = SuscripcionMensual("Membresia Total", 25.0, 6)

    curso1.mostrarFicha()
    plan1.mostrarFicha()
}