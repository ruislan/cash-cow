'use client';

import ProductCard from './card';

export default function TypicalList({
    products,
}) {
    return (
        <div className='grid grid-cols-4 gap-2 mb-8'>
            {products?.map((product) => (
                <ProductCard
                    key={product.name}
                    title={product.name}
                    image={product.images[0]}
                    slug={product.slug}
                />
            ))}
        </div>
    )
}