import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

export const useFetchProducts = () => {
  const [ikan, setIkan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(setIkan)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { ikan, loading, error };
};