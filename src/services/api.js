import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://sheetdb.io/api/v1/mlfz44whmxwot';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};