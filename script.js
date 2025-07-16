function kirimForm() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim:\n"${pesan}"`);
  return false; // Mencegah reload halaman
}
