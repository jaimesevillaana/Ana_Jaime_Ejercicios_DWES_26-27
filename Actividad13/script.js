const nombreFruteria = "FrutiShop";



let stockManzana = 50;
let stockBanana = 100;
let stockCereza = 75;
let stockNaranja = 80;
let stockPera = 60;
let stockKiwi = 40;
let stockMango = 30;
let stockPinia = 20;


alert("FRUTERIA " + nombreFruteria + "\n" +
"Manzana - 10.2 €/kg.\n" +
"Banana - 4.3 €/kg.\n" +
"Cereza - 5.6 €/kg.\n" +
"Naranja - 7.8 €/kg.\n" +
"Pera - 3.4 €/kg.\n" +
"Kiwi - 8.9 €/kg.\n" +
"Mango - 6.7 €/kg.\n" +
"Piña - 9.1 €/kg.");

let total = 0;
let continuar = "si";

while (continuar === "si") {
    let eleccion = prompt("¿Qué fruta quieres?");
    let existe = "no";
    let precioFruta = 0;

    if (eleccion === "manzana") {
        existe = "si";
        precioFruta = 10.2;
    } else if (eleccion === "banana") {
        existe = "si";
        precioFruta = 4.3;
    } else if (eleccion === "cereza") {
        existe = "si";
        precioFruta = 5.6;
    } else if (eleccion === "naranja") {
        existe = "si";
        precioFruta = 7.8;
    } else if (eleccion === "pera") {
        existe = "si";
        precioFruta = 3.4;
    } else if (eleccion === "kiwi") {
        existe = "si";
        precioFruta = 8.9;
    } else if (eleccion === "mango") {
        existe = "si";
        precioFruta = 6.7;
    } else if (eleccion === "piña") {
        existe = "si";
        precioFruta = 9.1;
    }

    if (existe === "si") {
        let eleccionKg = parseFloat(prompt("¿Cuántos kilos?"));

        total = precioFruta * eleccionKg;
        alert("Total de esta compra: " + total + " €");
    } else {
        alert("No tengo de eso");
    }
    continuar = prompt("¿Quieres comprar otra fruta? (si/no)").toLowerCase();
}

alert("Gracias por su compra.")