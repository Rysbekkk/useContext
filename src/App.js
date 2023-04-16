import React, { useState } from 'react';
import Header from './components/Header/Header';
import Views from './Views';
import { DataContext } from './Context';

const App = () => {

  const [products, setProducts] = useState([])
  const [details, setDetails] = useState({})

  return (
    <DataContext.Provider value={{
      products,
      setProducts,
      details,
      setDetails
    }}>
      <Header />
      <Views />
    </DataContext.Provider>
  );
};

export default App;