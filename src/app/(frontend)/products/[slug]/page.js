import Image from 'next/image';
import { notFound } from 'next/navigation';
import clsx from 'clsx';

import { productModel } from '@/models';

async function getProduct(slug) {
    return productModel.getProduct({ slug });
}

export default async function Page({ params }) {
    const product = await getProduct(params.slug);
    if (!product) return notFound();
    return (
        <div className='mx-auto py-10 max-w-7xl flex flex-col mb-8'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='p-2'>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        className='object-cover'
                        height='600'
                        width='600'
                    />
                </div>
                <div className='flex flex-col gap-4 p-2'>
                    <h1 className='text-4xl font-bold'>{product.name}</h1>
                    <span className='text-xl font-semibold'>{product.category}</span>
                    <div className='mb-8'>
                        {product.summary}
                    </div>
                    <div className=''>
                        <a
                            className={clsx(
                                'inline-flex whitespace-nowrap items-center justify-center font-bold transition-colors focus-visible:outline-none',
                                'bg-blue-700 text-white hover:bg-blue-700/90 text-xl',
                                'px-8 py-4 rounded-md'
                            )}
                            href='https://api.whatsapp.com/send?phone=18810561953'
                        >
                            Request a Quote
                        </a>
                    </div>
                </div>
            </div>
            <div
                className='prose prose-md prose-neutral break-words'
                dangerouslySetInnerHTML={{ __html: product.description }}>
            </div>
        </div>
    );
}
