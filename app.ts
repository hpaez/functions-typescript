// Funciones Básicas
const add = ( a: number, b: number ): number => {
    return a + b;
}

const count = ( heroes: string[] ): number => {
    return heroes.length;
}

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

console.log(count(superHeroes));

//Parametros por defecto
const callBatman = ( llamar: boolean = true ): void => {
    if ( llamar ) {
        console.log("Batiseñal activada");
    }
}

callBatman();

// Rest?
const assambleHeroes = ( ...heroes: string[] ): string => {
    return heroes.join(", ");
}

// Tipo funcion
const noHaceNada = ( number?: number, text?: string, boolean?: boolean, arrays?: string[] ): void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, t: string, b: boolean, a: string[]) => void;
noHaceNadaTampoco = noHaceNada
