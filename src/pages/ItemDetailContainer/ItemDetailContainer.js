import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProductCard from '../../components/ProductCard/ProductCard'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    
    let {id} = useParams(); 

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res)=>
        setProduct(res.data));
    },[id]);
    
  return (
      <div className="ProductDetail">
        <h2 className="tit">Detalle de producto</h2>
        <div key={product.id}>
            <ProductCard data={product}/>
        </div>
    </div>
  )
}

export default ItemDetailContainer;