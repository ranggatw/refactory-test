// Masukkan angka pada variabel di bawah
let angka= '';

// 
function grade() {
	if (angka >= 90 && angka <= 100) {
		hasil = "A";
	} else if (angka >= 80 && angka <= 89) {
		hasil = "B";
	} else if (angka >= 70 && angka <= 79) {
		hasil = "C";
	} else if (angka >= 60 && angka <= 69) {
		hasil = "D";
	} else {
		hasil = "E";
	}
	return hasil;
}

console.log(grade())