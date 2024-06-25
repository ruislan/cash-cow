'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Filters({
    categories,
}) {
    const searchParams = useSearchParams();
    return (
        <div className='flex flex-col border border-neutral-300 rounded-md w-full'>
            {categories?.map((cat) => (
                <Link
                    key={cat.name}
                    className={clsx(
                        'flex items-center hover:text-blue-700 p-4 border-b last:border-none border-neutral-300',
                        searchParams.get('category') === cat.slug && 'text-blue-700'
                    )}
                    href={`/products?category=${cat.slug}`}
                >
                    {cat.name}
                </Link>
            ))}
        </div>
    )
}