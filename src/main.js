export default class App {
//ejercicio1
sumatoriaSerieUno(numero) {
    let suma = 0; 

//expresiónInicial //expresiónCondicional //expresiónDeCondicional
    for(let i = 1; i <= numero; i = i + 1){
        
            suma = suma + 1/i;             //instruccion
            
        }

    return suma;
}


//ejercicio2
sumatoriaSerieDos(numero) {
    let i = 2
    let suma = 1;
    
    
    while (i<=numero) {
         if (i%2 === 0){
             suma = suma + 1/i;
        }else {
            suma = suma -1/i;  // todos los pares se van a sumar y todos los impares se restan
        }

        i = i + 1 ;
    
    }
    return suma;
}
//ejercicio3
esPrimo(numero){
    let i = 2;

    do{
        if(numero%i==0){
            return false;
        } else{
            return true;
        }
        i++;
    }while(i<numero);


}
//ejercicio4
obtenerMultiplos(inicio, fin){
    let i = inicio;
    let multiplo;

    do{
        if(i)
        console.log("")
    }
    while(i)
}
let 
//ejercicio5
obtenerImpares(numero1, numero2){
let t;
let imp = 0;
if(numero2 > numero1){
    t = numero1;
    numero1 = numero2;
    numero2 = t;
}
for(let i = numero1; i >= numero2; i--){
    if(i%2 !=0){
        if(imp == 0){
            imp = imp + 1;
            imp =imp.toString();
        }else {
            imp = imp + "," + i;
            imp = imp.toString();
        }
    }
}
}

}
let app = new App();

console.log(app.sumatoriaSerieUno(8));


console.log(app.sumatoriaSerieDos(9));


console.log(app.esPrimo(3));
console.log(app.esPrimo(4));

console.log(app.obtenerMultiplos());


console.log(app.obtenerImpares());