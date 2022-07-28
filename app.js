"use strict";
// Funciones Básicas
const add = (a, b) => {
    return a + b;
};
const count = (heroes) => {
    return heroes.length;
};
const superHero = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(count(superHero));
//Parametros por defecto
const callBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
callBatman();
// Rest?
const assambleHeroes = (...heroes) => {
    return heroes.join(", ");
};
// Tipo funcion
const noHaceNada = (number, text, boolean, arrays) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
