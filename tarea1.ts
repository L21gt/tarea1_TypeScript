let ejercicio: number = 0;

function siguienteEjercicio() {
    console.log("==========================================================================");
    console.log(`Ejercicio ${++ejercicio}`);
    console.log("--------------------------------------------------------------------------");
}


// Ejercicio 1 - Suma Segura
siguienteEjercicio();

function sumarSeguro(a: number, b: number): number {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a + b;
    } else {
        throw new Error('Entrada invalida.');
    }
}

// prueba que deberia funcionar
try {
    console.log(`sumarSeguro (2, 3) = ${sumarSeguro(2, 3)}`);
} catch (error) {
    console.error(error);
}

// prueba que deberia lanzar un error
try {
    console.log(`sumarSeguro(NaN, 3) = ${sumarSeguro(NaN, 3)}`);
} catch (error: any) {
    console.error(`Error esperado: ${error.message}`);
}

// ----------------------------------------------------------------------------

// Ejercicio 2 - Logger configurable (void + default)
siguienteEjercicio();

function log (msg: string, prefix: string = "[INFO]"): void {
    console.log(`${prefix} ${msg}`);
}

// pruebas
log("Sistema arriba");
log("Falla X", "[ERROR]");


// ----------------------------------------------------------------------------
// Ejercicio 3 Saludo Flexible
siguienteEjercicio();

function saludar(nombre?: string): string {
    return nombre ? `Hola, ${nombre}!` : "Hola, visitante";
}

// pruebas
console.log(saludar("Alice"));
console.log(saludar());

// ----------------------------------------------------------------------------
// Ejercicio 4 - Suma variable (rest)
siguienteEjercicio();

function sumarLista(...nums: number[]): number {
    return nums.reduce((acc, val) => acc + val, 0);
}

// pruebas
console.log(`sumarLista(1, 2, 3) = ${sumarLista(1, 2, 3)}`);
console.log(`sumarLista() = ${sumarLista()}`);
console.log(`sumarLista(5, 10, 15, 20) = ${sumarLista(5, 10, 15, 20)}`);


// ----------------------------------------------------------------------------
// Ejercicio 5 - Modelo de producto
siguienteEjercicio();

interface Producto {
    readonly id: number;
    nombre: string;
    precio: number;
    descuento?: number; // descuento es opcional
}

function aplicarDescuento(p: Producto): number {
    return p.descuento ? p.precio - p.descuento : p.precio;
}

// pruebas
const prod1: Producto = { id: 1, nombre: "Laptop", precio: 1000, descuento: 200 };
const prod2: Producto = { id: 2, nombre: "Mouse", precio: 50 };

console.log(`Precio de ${prod1.nombre}: $${prod1.precio}`);
console.log(`Descuento a aplicar a ${prod1.nombre}: $${prod1.descuento}`);
console.log(`Precio final de ${prod1.nombre}: $${aplicarDescuento(prod1)}`);
console.log(`Precio de ${prod2.nombre}: $${prod2.precio}`);
console.log(`Precio final de ${prod2.nombre}: $${aplicarDescuento(prod2)}`);



// ----------------------------------------------------------------------------
// Diccionario de errores (index signature)
siguienteEjercicio();

interface DiccionarioErrores {
    [codigo: string]: string;
}

function agregarError(dic: DiccionarioErrores, codigo: string, mensaje: string): void {
    dic[codigo] = mensaje;
}

// pruebas
const d: DiccionarioErrores = {};
agregarError(d, "404", "No encontrado");
d["404"] === "No encontrado";

console.log(d);


// ----------------------------------------------------------------------------
// Ejercicio 7 - Cliente con dirección (interfaces anidadas)
siguienteEjercicio();   

interface Direccion {
    calle: string;
    ciudad: string;
}

interface Cliente {
    nombre: string;
    direccion: Direccion;
    edad?: number;
}

function formatearCliente(c: Cliente): string {
    return `${c.nombre} (${c.direccion.ciudad}): ${c.direccion.calle}` + (c.edad ? `, Edad: ${c.edad}` : '');
}

// pruebas
const cliente1: Cliente = { nombre: "Bob", direccion: { calle: "Calle 123", ciudad: "CiudadX" }, edad: 30 };
const cliente2: Cliente = { nombre: "Eve", direccion: { calle: "Avenida 456", ciudad: "CiudadY" } };
console.log(formatearCliente(cliente1));
console.log(formatearCliente(cliente2));


// ----------------------------------------------------------------------------
// Ejercicio 8 - Limpieza de nombres
siguienteEjercicio();

function limpiarNombres(nombres: string[]): string[] {
    return nombres.map(n => n.trim()).filter(n => n.length > 0);
}

// pruebas
const nombres = [" Alice ", "  ", "Bob", "", "  Charlie  "];
const nombresLimpia = limpiarNombres(nombres);
console.log(nombresLimpia); // ["Alice", "Bob", "Charlie"]

