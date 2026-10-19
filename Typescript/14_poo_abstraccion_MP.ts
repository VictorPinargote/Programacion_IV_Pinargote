abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador recupera energías");
    }
}

class Rocky extends Boxeador{
    atacar(): void{
        console.log("Rocky lanza un gancho")
    }
}

class Apollo extends Boxeador{
    atacar(): void{
        console.log("Apollo lanza un uppercut")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]
console.log(boxeadores)
boxeadores.forEach(boxeador=>boxeador.atacar());

abstract class Saiyayin {
    abstract transformarse(): void;
    detectar(): void{
        console.log("Detectando nivel de energia del enemigo");
    }
}

class Goku extends Saiyayin{
    transformarse(): void{
        console.log("Goku se transforma en supersaiyayin")
    }
}

class Vegeta extends Saiyayin{
    transformarse(): void{
        console.log("Vegeta se transforma en Ultra ego")
    }
}

const saiyayins: Saiyayin[]=[
    new Goku(),
    new Vegeta()
]
console.log(saiyayins)
saiyayins.forEach(saiyayin=>saiyayin.transformarse());
