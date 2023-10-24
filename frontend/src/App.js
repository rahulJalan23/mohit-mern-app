import React, { useEffect, useState } from 'react';
import { getAllStocks, getStockById } from './services/stock';

function App() {
  const [balance, setBalance] = useState(null);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    (async () => {
      const stocks = await getAllStocks();
      setStocks(stocks);
    })();
  }, []);

  const fetchStock = async () => {
    console.log('Ran fetch stock');
    if (selectedStockId) {
      const stock = await getStockById(selectedStockId);
      setBalance(stock?.price || null);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchStock, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchStock();
  }, [selectedStockId]);

  return (
    <div className="text-center w-[80%] mx-auto ">
      <div className="text-3xl m-4">Stock Balance Inquiry</div>
      <div>
        <div className="text-xl">Select Stock</div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value) setSelectedStockId(e.target.value);
          }}
          className="text-xl mt-2"
        >
          <option value={0}>None</option>
          {stocks.map((stock) => {
            return <option value={stock._id}>{stock.name}</option>;
          })}
        </select>
        <button>Submit</button>
      </div>
      <div className="flex justify-center">
        <div className="text-xl m-2">Balance:</div>
        <div className="m-2 text-xl">
          {selectedStockId && balance ? <>{balance}</> : <>Select Stock</>}
        </div>
      </div>
    </div>
  );
}

export default App;
