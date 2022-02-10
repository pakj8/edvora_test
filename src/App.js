import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get("https://assessment-edvora.herokuapp.com")
      .then(res => {
        setProducts(res.data);
      })
  }, []);

  return (
    <div className="App">
      <div className="left">
        <h3>Filters</h3>
        <div className="filter-tab">
          <select name="products" id="products">
            <option value="">Products</option>
            {products.map((product,i) => (
              <option key={i}>
                {product.brand_name}
              </option>
            ))}
          </select>
          <select name="state" id="state">
            <option value="">State</option>
            {products.map((product,i) => (
              <option key={i}>
                {product.address.state}
              </option>
            ))}
          </select>
          <select name="city" id="city">
            <option value="">City</option>
            {products.map((product,i) => (
              <option key={i}>
                {product.address.city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="right">
        <h3>Edvora</h3>
        <h3>Products</h3>

        <div className="list">
        {
          products.map(product => (
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt="product" />
              </div>
              <div className="product-details">
                <h4>{product.product_name}</h4>
                <p>{product.brand_name}</p>
                <p>{product.discription}</p>
                
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default App;
