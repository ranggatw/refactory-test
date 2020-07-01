// Masukkan terlebih dulu angka yang ingin di ketahui ganjil atau genap.
let angka = '';

function hasil() {
    if ( angka%2 == 1 ) {
        bilangan = 'Ganjil'
    } else if ( angka%2 == 0 ) {
        bilangan = "Genap"
    }
    return bilangan;
}

console.log(hasil())