open class CursoCatalogo(
    val titulo: String,
    val precioBase: Double
) {
    open fun calcularPrecioFinal(): Double {
        return precioBase
    }
}

class CursoConDescuento(
    titulo: String,
    precioBase: Double,
    val descuento: Double
) : CursoCatalogo(titulo, precioBase) {
    override fun calcularPrecioFinal(): Double {
        return precioBase - descuento
    }
}

class CursoBootcamp(
    titulo: String,
    precioBase: Double,
    val costoMentoria: Double
) : CursoCatalogo(titulo, precioBase) {
    override fun calcularPrecioFinal(): Double {
        return precioBase + costoMentoria
    }
}

fun main() {
    val carrito: List<CursoCatalogo> = listOf(
        CursoCatalogo("Git y GitHub", 25.0),
        CursoConDescuento("Kotlin desde Cero", 50.0, 10.0),
        CursoBootcamp("Fullstack Mobile", 80.0, 30.0)
    )

    for (curso in carrito) {
        println("${curso.titulo} -> Precio final: $${curso.calcularPrecioFinal()}")
    }
}