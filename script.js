function showPhoto() {
    const line = document.getElementById('line');
    const photo = document.getElementById('photo');

    // Menambahkan animasi ke garis
    line.classList.add('animate-line');

    // Menampilkan gambar setelah beberapa saat (setelah garis muncul)
    setTimeout(() => {
        photo.classList.add('show');
    }, 1000); // Waktu delay sinkron dengan animasi garis
}

// Menjalankan fungsi setelah halaman selesai dimuat
window.addEventListener('DOMContentLoaded', showPhoto);