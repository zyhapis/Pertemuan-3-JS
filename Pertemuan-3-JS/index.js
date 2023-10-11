// Fungsi untuk menampilkan Prompt ketika tombol ditekan
document.getElementById('showPrompt').addEventListener('click', function() {
    let userInput = prompt("Masukkan angka (1 atau 2):");
    let userNumber = parseInt(userInput);
    let message = userNumber === 2 ? "Benar" : "Salah";
    
    // Tampilkan pesan konfirmasi
    let confirmation = confirm("Apakah kamu yakin dengan jawaban kamu?");
    
    // Periksa hasil dari konfirmasi
    if (confirmation) {
        alert(message);
    } else {
        alert("Anda membatalkan aksi.");
    }
});