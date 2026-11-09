fun main(){
    println("Condiconales If")
    println("Condiconales If Simples")
    val energia = 60
    if (energia>=50) {
        println("Rick puede abrir el portal")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70
    if (energia >= 100){
        println("Rick puede abrir el portal")
    } else if (energia >= 50){
        println("Energia suficiente")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional enlazada")
    energia = 70
    val motorActivo = true
    if (energia >= 100){
        println("Rick puede abrir el portal")
        if (motorActivo){
            println("puede despegar")
        }
    } else if (energia >= 50){
        println("Energia suficiente")
        if (motorActivo){
            println("puede despegar")
        }
    } else {
        println("Energia insuficiente")
    }

}