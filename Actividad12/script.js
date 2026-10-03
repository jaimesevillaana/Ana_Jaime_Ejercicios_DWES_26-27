/* Este ejercicio me perturba un poco. No sé a que te refieres con "Los participantes tienen
7 oportunidades para adivinar la palabra.", cada letra introducida cuenta como 
una oportunidad? o sólo las letras que se fallan? */ 

let palabra = prompt("Introduce una palabra de 4 letras: ");
let intentos = 7;
let letra = "";
let acierto = false;
let letraAcertada = "";
let posicion;
let letrasDichas = "";

for (let i = 0; i < intentos; i++) {

    letra = prompt("Introduce una letra: ");
    
    acierto = false;

    for (let j = 0; j < palabra.length; j++) {
    
        if (letra === palabra[j]) {
            
            if (j === 0) {
                posicion = letra;
                alert("Letra " + posicion + " _ _ _ acertada");
            }
            if (j === 1) {
                posicion = posicion + letra;
                alert("Letra " + posicion + " _ _ acertada");
            }
            if (j === 2) {
                posicion = posicion + letra;
                alert("Letra " + posicion + " _ acertada");
            }
            if (j === 3) {
                posicion = posicion + letra;
                alert("Letra " + posicion + " acertada");
            }
            acierto = true;
        } 
    }
}
alert("Has consumido todos los intentos");