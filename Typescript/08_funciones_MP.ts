//Funciones Simples
//Devolver el resultado de una suma de créditos
function SumarCreditos(Credito1: number, Credito2: number): number {
    return Credito1 + Credito2;
}

const totalCreditos = SumarCreditos(100, 200);
console.log(`El total de créditos es: ${totalCreditos}`);

//sin  devolver un valor
function mostrarCentroDeEntrenamiento(nombre: string): void {
    console.log(`centro de entrenamiento Jedi: ${nombre}`);
    const naves: string[] = ['X-Wing', 'TIE Fighter', 'Millennium Falcon'];
    for (const nave of naves) {
        console.log(`Nave disponible: ${nave}`);
    }
}

mostrarCentroDeEntrenamiento('Templo Jedi');

//Funciones con parametros opcionales
function entrenarJedi(nombre: string, nivelFuerza?: string): void {
    if (nivelFuerza) {
        console.log(`Entrenando a ${nombre} con nivel de fuerza: ${nivelFuerza}`);
    } else {
        console.log(`Entrenando a ${nombre} sin especificar nivel de fuerza`);
        nivelFuerza = '1';
        console.log(`Nivel de fuerza por defecto: ${nivelFuerza}`);
    }
}

entrenarJedi('Luke Skywalker', '90');
entrenarJedi('Leia Organa');

function entrenarJedi2(nombre: string, nivel: number = 1): void {
    console.log(`Entrenando a ${nombre} con nivel de fuerza: ${nivel}`);
}

entrenarJedi2('Obi-Wan Kenobi', 80);
entrenarJedi2('Yoda');

//Funciones Flecha
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaPotenciada = potenciarFuerza(50);
console.log(`Fuerza potenciada (función normal): ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha = potenciarFuerzaFlecha(50);
console.log(`Fuerza potenciada (función flecha): ${fuerzaPotenciadaFlecha}`);

//Funciones Overloads
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;
function formatear(valor: number | string | boolean): string {
    if (typeof valor === 'number') {
        return valor.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }
    if (typeof valor === 'boolean') {
        return valor ? 'Si' : 'No';
    }
    return `${valor}`;
}

console.log(formatear(123456.789)); // "123,456.79"
console.log(formatear(true)); // "Si"
console.log(formatear('activo')); // "activo"

//Clousures
function crearContador(inicio: number = 0){
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    }
}

const c1 = crearContador();
const c2 = crearContador(10);

c1.incrementar();
c1.incrementar();
c1.decrementar();
c2.incrementar();

console.log(c1.valor()); // 1
console.log(c2.valor()); // 11  

c1.resetear();
console.log(c1.valor()); // 0