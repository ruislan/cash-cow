'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
    return (
        <Link
            className='flex items-center gap-3 mr-20'
            href='/'
        >
            <Image
                className='w-10 h-10'
                src='/logo.webp'
                width='48'
                height='48'
                alt='Tian Te'
            />
            <span className='text-gray-900 font-bold text-xl uppercase'>TianTe</span>
        </Link>
    );
}