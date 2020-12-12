export default class App {
//ejercicio1
sumatoriaSerieUno(numero) {
    let suma = 0; 

//expresiónInicial //expresiónCondicional //expresiónDeCondicional
    for(let i = 1; i <= numero; i++){
        
            suma = suma + (1/i);             //instruccion
            
        }

    return suma;
}


//ejercicio2
sumatoriaSerieDos(numero) {
    let i = 2
    let suma = 1;
    
    
    while (i<=numero) {
         if (i%2 === 0){
             suma = suma + (1/i);
        }else {
            suma = suma - (1/i);  // todos los pares se van a sumar y todos los impares se restan
        }

        i++;
    
    }
    return suma;
}
//ejercicio3
esPrimo(numero){
    let i = 2;
    
    do{
        if(numero%i === 0){
            return;
        }
        i++;
    } while (i<=(numero-1));
    if(numero>0 && numero !==0){
        return false;
    } 
    }


//ejercicio4
obtenerMultiplos(inicio, fin){
    if(inicio>fin){
        t=inicio;
        fin=inicio;
        fin=t;
    }
let suma=0
    do{
        if(inicio%3==0){
            suma=suma+inicio;
            suma=suma.toString(10);
        }
        
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
    if(i % 2 !=0){
        if(imp == 0){
            imp = imp + 1;
            imp = imp.toString();
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


console.log(app.obtenerMultiplos(1,10));


console.log(app.obtenerImpares(6,5));

