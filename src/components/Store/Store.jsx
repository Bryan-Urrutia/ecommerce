'use client'

import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "./Product";

const Store = () => {
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter((item) => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    })
    return <section className="py-12 xl:py-24 h-fit xl:pt-10 bg-no-repeat bg-bottom dark:bg-none">
        <div className="container mx-auto">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    </section>
};

export default Store