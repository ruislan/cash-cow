'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const menus = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];

export default function Menus() {
    const pathname = usePathname();

    return (
        <div className='flex items-center h-full w-full max-w-7xl mx-auto'>
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
            <div className='flex items-center gap-8'>
                {menus.map((menu, index) => (
                    <div
                        key={index}
                        className='relative flex items-center justify-center h-16'
                    >
                        <Link
                            className={clsx(
                                'font-semibold hover:font-bold text-lg hover:text-blue-700 select-none cursor-pointer',
                                (menu.url === '/' ? pathname === '/' : pathname.startsWith(menu.url)) ? 'text-blue-700' : 'text-gray-900'
                            )}
                            href={menu.url}
                        >
                            {menu.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}