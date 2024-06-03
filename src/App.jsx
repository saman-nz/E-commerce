import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Second from './components/Second';


const App = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is product 1',
            price: 29.99,
            image:'https://picsum.photos/id/21/367/267'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is product 2',
            price: 39.99,
            image: 'https://fastly.picsum.photos/id/95/2048/2048.jpg?hmac=rvEUpzQSeSWTzfsWTIytYnLieOx_Iaa6PfYOxVwEb1g'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is product 3',
            price: 49.99,
            image: 'https://fastly.picsum.photos/id/118/1500/1000.jpg?hmac=jumRsHTbfg0frrVd5Xw1187nwNcZCqJbqrdlXpPAIjw'
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'This is product 4',
            price: 49.99,
            image: 'https://picsum.photos/id/122/4147/2756'
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'This is product 5',
            price: 49.99,
            image: 'https://picsum.photos/id/116/3504/2336'
        }

    ];

    return (
        <div className="App">
            <Header />
            <Hero />
            <Second />
            <ProductList products={products} />
         
            <Footer />
        </div>
    );
}

export default App;
