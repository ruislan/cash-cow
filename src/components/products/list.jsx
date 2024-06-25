'use client';

import ProductCard from './card';

export default function List({
    products,
}) {
    return (
        <div className='grid grid-cols-2 gap-4 w-full'>
            {products?.map((product) => (
                <ProductCard
                    key={product.name}
                    image={product.images[0]}
                    title={product.name}
                    slug={product.slug}
                />
            ))}
        </div>
    )
}