import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <>
        <h2 className='text-center pt-5 pb-5'>Best <span className='orange  '>Sellers </span>For today</h2>
         <section className="product-list pb-5">
            
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
        </>
       
    );
}

export default ProductList;
