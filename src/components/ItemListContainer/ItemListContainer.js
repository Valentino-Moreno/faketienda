import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
     
      axios("https://fakestoreapi.com/products").then((res) =>
        setProducts(res.data)
      );
    }, []);

  return (
    <div className='contenedor'>
        <div className='contenedor-hijo'>
      {products.map((product) => {
        return (
          <Link to={`/item/${product.id}`}>
            <ProductCard key={product.id} data={product} />
          </Link>
        );
      })}
      </div>
    </div>
  );
};

export default ItemListContainer;