'use client';

import ProductCard from './card';

export default function TypicalList({
    products,
}) {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 mb-8 md:px-0 px-3'>
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