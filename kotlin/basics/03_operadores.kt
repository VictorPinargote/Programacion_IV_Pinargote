const val COMBUSTIBLE_MINIMO: Int = 50
fun main(){
    println("Operadores")
    println("Operadores Artimeticos")
    var numero1: Double = 10.50
    var numero2: Double = 5.50
    var suma: Double = numero1 + numero2

    println("Suma + : $numero1 + $numero2 = ${numero1+numero2}")
    println("Suma + : $numero1 + $numero2 = ${suma}")
    println("Resta - : $numero1 - $numero2 = ${numero1-numero2}")
    println("Multiplicación - : $numero1 * $numero2 = ${numero1*numero2}")
    println("Division / : $numero1 / $numero2 = ${numero1/numero2}")
    println("Residuo % : $numero1 % $numero2 = ${numero1%numero2}")

    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val cristales = 10+3*5+5
    println("Cristales: $cristales")
    val energia = 3/5*5
    println("Energia: $energia")
    val combustible = 100+20/4*3-10%3    
    println("Combustible: $combustible")

    println("Operadores de Comparación")
    println("Igual a == ${10==10}" )
    println("Igual a == ${10==11}" )
    println("Diferente de == ${5!=10}" )
    println("Diferente de == ${10!=10}" )
    println("Mayor que == ${5>10}" )
    println("Mayor que == ${15>10}" )
    println("Menor que == ${5<10}" )
    println("Menor que == ${15<10}" )
    println("Mayor igual + ${10>=10}" )
    println("Menor que == ${15>=10}" )
    println("Menor que == ${5>=10}" )



    println("Operadores Lógicos")
    println("&& and Y")
    println("|| and or")
    println("! NOT")

    val combustible1 = 80
    val portalActivo = true

    val puedeViajar = combustible1 >= 50 && portalActivo

    val negado = !portalActivo

    println("¿Puede viajar? $puedeViajar" )
    println("Negado ? $negado" )

    val tienetarjeta = false
    val autorizadoPorRick = true
    val puedeEntrar = tienetarjeta || autorizadoPorRick

    println("¿Puede entrar? $puedeEntrar" )
    println("Operadores de asignacion")
    println("=, +=, -=, *=, /=,%=")

    println("Control de Nave - Rick Sanchez y Francisco Higuera")
    val pilotoNave = "Francisco Higuera"
    var combustibleNave = 100
    var portalesUniverso = 5
    val motorActivoNave = true

    println("Piloto: $pilotoNave")
    combustibleNave+=40
    portalesUniverso--
    println("Combustible: $combustibleNave")
    println("Portales restantes: $portalesUniverso")
    val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
    val tienePortales = portalesUniverso>= 0
    val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
    println("¿Tiene combustible? $tieneCombustible")
    println("¿Tiene portales? $tienePortales")
    println("Puede ¿viajar? $puedeViajarNave")

}