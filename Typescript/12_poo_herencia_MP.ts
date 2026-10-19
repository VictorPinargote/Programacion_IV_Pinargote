class Boxeador {
    golpear(): void {
        console.log("Golpe Basico");
    }
}

class Rocky extends Boxeador {
    golpeEspecial(): void {
        console.log("Rocky lanza un poderoso gancho");
    }
}

class Apollo extends Boxeador {
    golpeRapido(): void {
        console.log("Apollo lanza un jab veloz");
    }
}

const rocky = new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();

class Guerrero {
    atacar(): void {
        console.log("El gerrero realiza un ataque Basico");
    }
}

class Goku extends Guerrero {
    kamehameha(): void {
        console.log("Goku lanza un poderoso kamehameha");
    }
}

class Vegeta extends Guerrero {
    finalFlash(): void {
        console.log("Vegeta utliza su poderoso final flash");
    }
}

const goku = new Goku();
goku.atacar();
goku.kamehameha();
const vegeta = new Vegeta();
vegeta.atacar();
vegeta.finalFlash();