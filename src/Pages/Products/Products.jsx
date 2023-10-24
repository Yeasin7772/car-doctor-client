import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {

    const [products, setProducts] = useState()

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    console.log(products);
    return (
        <div className="mt-5">
            <div className="text-center space-y-5">
                <h2 className="text-2xl font-bold text-[#FF3811]">Popular Products</h2>
                <h1 className="text-5xl"> Browse Our Products</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products?.map(product => 
                    <ProductsCard key={product.id} product={product}>

                    </ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Products;