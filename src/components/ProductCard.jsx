export function ProductCard({ item }) {
  const handleWhatsApp = () => {
    const message = `Halo! Saya mau pesan ${item.nama_ikan} - ${item.stok} Kg @ Rp ${item.harga}/Kg`;
    window.open(`https://wa.me/62YOUR_NUMBER?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="product-card">
      <h3>{item.nama_ikan}</h3>
      <p><strong>Kategori:</strong> {item.kategori}</p>
      <p><strong>Harga:</strong> Rp {item.harga?.toLocaleString('id-ID')} / Kg</p>
      <p><strong>Stok:</strong> {item.stok} Kg</p>
      <button onClick={handleWhatsApp} className="btn-wa">
        💬 Beli via WA
      </button>
    </div>
  );
}