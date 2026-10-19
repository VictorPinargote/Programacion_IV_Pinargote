class Boxeador {
    atacar(): void {
        console.log("Atacque basico");
    }
}
class Rocky extends Boxeador{
    override atacar(): void{
        console.log("Rocky ataca con fuerza")

    }
}



class Apollo extends Boxeador{
    override atacar(): void{
        console.log("Apollo ataca con velocidad");

    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()

]
console.log(boxeadores)
boxeadores.forEach(boxeador=>boxeador.atacar());

class Guerrero {
	atacar(): void {
		console.log("El gerrero realiza un ataque basico");
	}
}

class Goku extends Guerrero {
	override atacar(): void{
		console.log("Goku lanza un poderoso kamehamha");
	}
}

class Vegeta extends Guerrero {
	override atacar(): void{
		console.log("Vegeta lanza un poderoso kamehamha");
	}
}
  
const guerreros: Guerrero[]=[
    new Goku(),
    new Vegeta()
]
console.log(guerreros)
guerreros.forEach(guerrero=>guerrero.atacar());