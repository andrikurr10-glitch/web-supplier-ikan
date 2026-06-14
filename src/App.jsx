import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ikan, setIkan] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ini link API SheetDB lo bro!
  const API_URL = 'https://sheetdb.io/api/v1/mlfz44whmxwot';

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setIkan(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Waduh, error bro: ", error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Katalog Ikan Segar 🐟</h1>
      
      {loading ? (
        <p>Loading narik jaring...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {ikan.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
              <h3>{item.nama_ikan}</h3>
              <p>Kategori: {item.kategori}</p>
              <p>Harga: Rp {item.harga} / Kg</p>
              <p>Stok: {item.stok} Kg</p>
              <button style={{ background: '#25D366', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                Beli via WA
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;