let tahun = [2020];

function kabisat() {
	if (tahun % 4 === 0) {
		if (tahun % 100 !== 0) {
			return (tahun + " adalah tahun kabisat");
		} else {
			if (tahun % 400 === 0) {
				return (tahun + " adalah tahun kabisat");
			} else {
				return (tahun + " adalah bukan tahun kabisat");
			}
		}
	} else {
		return tahun + " adalah bukan tahun kabisat";
	}
}

console.log(kabisat());
