let nilai = new Array(4,22,1,89,99);

// Mencari nilai maksimum
let hasilMax = Math.max.apply(null, nilai);
console.log("Nilai maksimumnya adalah : " + hasilMax)

// Mencari nilai minimum
let hasilMin = Math.min.apply(null, nilai);
console.log("Nilai minimumnyanya adalah : " + hasilMin)

// Mencari rata rata
let sum = 0;
for( let i = 0; i < nilai.length; i++ ){
    sum += parseInt( nilai[i] );
}
let avg = sum/nilai.length;
console.log("Rata rata : " + avg );