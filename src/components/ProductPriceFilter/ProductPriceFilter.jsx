import React from 'react'
import {useState} from 'react'
const ProductPriceFilter = () => {
    // Product array
    const initialProducts = [
  { id: 1, name: 'Laptop Stand', price: 850 },
  { id: 2, name: 'Mechanical Keyboard', price: 1200 },
  { id: 3, name: 'Wireless Mouse', price: 450 },
  { id: 4, name: 'USB-C Hub', price: 1500 },
  { id: 5, name: 'Mouse Pad', price: 200 },
    ];
    //product state
     const [products, setProducts] = useState(initialProducts);
    const PRICE_THRESHOLD = 1000;
    //function to filter products
const filterBelow1000 = () => {
    const filteredList = initialProducts.filter(product => product.price < PRICE_THRESHOLD);
    setProducts(filteredList);
    };
     // Function to reset to the full list
  const showAllProducts = () => {
    setProducts(initialProducts);
  };
  return (
      <>
        <button onClick={filterBelow1000}>Filter Below 1000</button>
        <button onClick={showAllProducts}>Show All Products</button>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ₹{product.price}
            </li>
          ))}
        </ul>
      </>
  )
}

export default ProductPriceFilter