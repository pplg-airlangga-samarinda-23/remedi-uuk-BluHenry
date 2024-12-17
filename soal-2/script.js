function hitungRataRata() {
    // Ambil nilai input dari masing-masing siswa
    let siswa1 = parseFloat(document.getElementById("siswa1").value) || 0;
    let siswa2 = parseFloat(document.getElementById("siswa2").value) || 0;
    let siswa3 = parseFloat(document.getElementById("siswa3").value) || 0;
    let siswa4 = parseFloat(document.getElementById("siswa4").value) || 0;
    let siswa5 = parseFloat(document.getElementById("siswa5").value) || 0;

    // Hitung rata-rata
    let rataRata = (siswa1 + siswa2 + siswa3 + siswa4 + siswa5) / 5;

    // Tampilkan hasil
    document.getElementById("hasil").value = rataRata.toFixed(2);
}