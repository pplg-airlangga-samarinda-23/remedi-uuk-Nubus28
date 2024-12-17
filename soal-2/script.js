function calculateAverage() {
    const siswa1 = parseFloat(document.getElementById("siswa1").value);
    const siswa2 = parseFloat(document.getElementById("siswa2").value);
    const siswa3 = parseFloat(document.getElementById("siswa3").value);
    const siswa4 = parseFloat(document.getElementById("siswa4").value);
    const siswa5 = parseFloat(document.getElementById("siswa5").value);

    const average = (siswa1 + siswa2 + siswa3 + siswa4 + siswa5) / 5;

    document.getElementById("hasil").value = average.toFixed(2);
}