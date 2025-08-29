"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ejercicio = 0;
function siguienteEjercicio() {
    console.log("==========================================================================");
    console.log(`Ejercicio ${++ejercicio}`);
    console.log("--------------------------------------------------------------------------");
}
// Ejercicio 1 - Suma Segura
siguienteEjercicio();
function sumarSeguro(a, b) {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a + b;
    }
    else {
        throw new Error('Entrada invalida.');
    }
}
// prueba que deberia funcionar
try {
    console.log(`sumarSeguro (2, 3) = ${sumarSeguro(2, 3)}`);
}
catch (error) {
    console.error(error);
}
// prueba que deberia lanzar un error
try {
    console.log(`sumarSeguro(NaN, 3) = ${sumarSeguro(NaN, 3)}`);
}
catch (error) {
    console.error(`Error esperado: ${error.message}`);
}
// ----------------------------------------------------------------------------
// Ejercicio 2 - Logger configurable (void + default)
siguienteEjercicio();
function log(msg, prefix = "[INFO]") {
    console.log(`${prefix} ${msg}`);
}
// pruebas
log("Sistema arriba");
log("Falla X", "[ERROR]");
// ----------------------------------------------------------------------------
// Ejercicio 3 Saludo Flexible
siguienteEjercicio();
function saludar(nombre) {
    return nombre ? `Hola, ${nombre}!` : "Hola, visitante";
}
// pruebas
console.log(saludar("Alice"));
console.log(saludar());
// ----------------------------------------------------------------------------
// Ejercicio 4 - Suma variable (rest)
siguienteEjercicio();
//# sourceMappingURL=tarea1.js.map