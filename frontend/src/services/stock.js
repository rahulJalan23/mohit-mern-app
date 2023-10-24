import axios from './axiosInit';

export const getAllStocks = async () => {
  try {
    const response = await axios.get('/stock');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getStockById = async (stockId) => {
  try {
    const response = await axios.get('/stock/' + stockId);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
