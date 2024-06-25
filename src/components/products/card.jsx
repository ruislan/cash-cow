'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Card({
    image,
    title,
    summary,
    slug,
}) {
    return (
        <Link
            href={slug ? `/products/${slug}` : '#'}
            className='flex flex-col p-4'
        >
            <div className='w-full'>
                <Image
                    className='w-full h-full'
                    src={image}
                    width={280}
                    height={280}
                    alt={title}
                />
            </div>
            <div className='w-full flex justify-center items-center'>
                <h4 className='font-semibold'>{title}</h4>
            </div>
            {summary &&
                <div className='w-full'>
                    {summary}
                </div>
            }
        </Link>
    );
}