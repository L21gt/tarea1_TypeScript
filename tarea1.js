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
function sumarLista(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
// pruebas
console.log(`sumarLista(1, 2, 3) = ${sumarLista(1, 2, 3)}`);
console.log(`sumarLista() = ${sumarLista()}`);
console.log(`sumarLista(5, 10, 15, 20) = ${sumarLista(5, 10, 15, 20)}`);
// ----------------------------------------------------------------------------
// Ejercicio 5 - Modelo de producto
siguienteEjercicio();
function aplicarDescuento(p) {
    return p.descuento ? p.precio - p.descuento : p.precio;
}
// pruebas
const prod1 = { id: 1, nombre: "Laptop", precio: 1000, descuento: 200 };
const prod2 = { id: 2, nombre: "Mouse", precio: 50 };
console.log(`Precio de ${prod1.nombre}: $${prod1.precio}`);
console.log(`Descuento a aplicar a ${prod1.nombre}: $${prod1.descuento}`);
console.log(`Precio final de ${prod1.nombre}: $${aplicarDescuento(prod1)}`);
console.log(`Precio de ${prod2.nombre}: $${prod2.precio}`);
console.log(`Precio final de ${prod2.nombre}: $${aplicarDescuento(prod2)}`);
// ----------------------------------------------------------------------------
// Diccionario de errores (index signature)
siguienteEjercicio();
function agregarError(dic, codigo, mensaje) {
    dic[codigo] = mensaje;
}
// pruebas
const d = {};
agregarError(d, "404", "No encontrado");
d["404"] === "No encontrado";
console.log(d);
// ----------------------------------------------------------------------------
// Ejercicio 7 - Cliente con dirección (interfaces anidadas)
siguienteEjercicio();
function formatearCliente(c) {
    return `${c.nombre} (${c.direccion.ciudad}): ${c.direccion.calle}` + (c.edad ? `, Edad: ${c.edad}` : '');
}
// pruebas
const cliente1 = { nombre: "Bob", direccion: { calle: "Calle 123", ciudad: "CiudadX" }, edad: 30 };
const cliente2 = { nombre: "Eve", direccion: { calle: "Avenida 456", ciudad: "CiudadY" } };
console.log(formatearCliente(cliente1));
console.log(formatearCliente(cliente2));
// ----------------------------------------------------------------------------
// Ejercicio 8 - Limpieza de nombres
siguienteEjercicio();
function limpiarNombres(nombres) {
    return nombres.map(n => n.trim()).filter(n => n.length > 0);
}
// pruebas
const nombres = [" Alice ", "  ", "Bob", "", "  Charlie  "];
const nombresLimpia = limpiarNombres(nombres);
console.log(nombresLimpia); // ["Alice", "Bob", "Charlie"]
// ----------------------------------------------------------------------------
// Ejercicio 9 - Mezcla segura (uniones)
siguienteEjercicio();
function soloStrings(valores) {
    return valores
        .filter(v => typeof v === 'string')
        .map(s => s.toUpperCase());
}
// pruebas
const mezcla = [1, "hello", 2, "world", "TypeScript", 3];
const soloStrs = soloStrings(mezcla);
console.log(soloStrs); // ["HELLO", "WORLD", "TYPESCRIPT"]
// ----------------------------------------------------------------------------
// Ejercicio 10 - Tupla resultado de división
siguienteEjercicio();
function dividirTS(a, b) {
    if (b === 0) {
        return [0, false];
    }
    else {
        return [a / b, true];
    }
}
// pruebas
const [resultado1, exito1] = dividirTS(10, 2);
console.log(`[${resultado1}, ${exito1}]`); // Resultado: 5, Exito: true
const [resultado2, exito2] = dividirTS(10, 0);
console.log(`[${resultado2}, ${exito2}]`); // Resultado: Infinity, Exito: false
// ----------------------------------------------------------------------------
// Ejercicio 11 - Cuenta bancaria (encapsulación)
siguienteEjercicio();
class Cuenta {
    constructor() {
        this.saldo = 0;
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
        }
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
// pruebas
// Crea una instancia de la clase Cuenta
const miCuenta = new Cuenta();
// Prueba de depósito
console.log(`Saldo inicial: ${miCuenta.getSaldo()}`); // Salida esperada: Saldo inicial: 0
miCuenta.depositar(100);
console.log(`Saldo después de depositar 100: ${miCuenta.getSaldo()}`); // Salida esperada: Saldo después de depositar 100: 100
// Prueba de retiro exitoso
const retiroExitoso = miCuenta.retirar(50);
console.log(`Retiro de 50 exitoso: ${retiroExitoso}`); // Salida esperada: Retiro de 50 exitoso: true
console.log(`Saldo después de retirar 50: ${miCuenta.getSaldo()}`); // Salida esperada: Saldo después de retirar 50: 50
// Prueba de retiro fallido (saldo insuficiente)
const retiroFallido = miCuenta.retirar(100);
console.log(`Intento de retirar 100 fallido: ${retiroFallido}`); // Salida esperada: Intento de retirar 100 fallido: false
console.log(`Saldo después de intento fallido: ${miCuenta.getSaldo()}`); // Salida esperada: Saldo después de intento fallido: 50
// ----------------------------------------------------------------------------
// Ejercicio 12 - Usuario con atajos de constructor
siguienteEjercicio();
class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    getEdad() {
        return this.edad;
    }
}
// pruebas
const usuario = new Usuario("Charlie", 28, "charlie@test.com");
console.log(`Edad: ${usuario.getEdad()}`); // Salida esperada: Edad: 28
//# sourceMappingURL=tarea1.js.map