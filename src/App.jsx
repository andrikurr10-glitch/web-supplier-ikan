import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ikan, setIkan] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://sheetdb.io/api/v1/mlfz44whmxwot';

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setIkan(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  const handleWhatsApp = (item) => {
    const message = `Halo! Saya mau pesan ${item.nama_ikan} - ${item.stok} Kg @ Rp ${item.harga}/Kg`;
    window.open(`https://wa.me/6287801087313?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🐟 Katalog Ikan Segar</h1>
        <p>Supplier Ikan Terpercaya</p>
      </header>

      <div className="container">
        {loading ? (
          <p className="loading">⏳ Loading narik jaring...</p>
        ) : (
          <div className="product-grid">
            {ikan.map((item) => (
              <div key={item.id} className="product-card">
                <h3>{item.nama_ikan}</h3>
                <p><strong>Kategori:</strong> {item.kategori || '-'}</p>
                <p className="price">Harga: <strong>Rp {item.harga?.toLocaleString('id-ID')} / Kg</strong></p>
                <p>Stok: {item.stok} Kg</p>
                <button 
                  className="btn-wa" 
                  onClick={() => handleWhatsApp(item)}
                >
                  💬 Beli via WA
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
