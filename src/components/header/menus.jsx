'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Menus({ menus }) {
    const pathname = usePathname();

    return (
        <div className='hidden md:flex md:items-center h-full w-full gap-8'>
            {menus.map((menu, index) => (
                <div
                    key={index}
                    className='relative flex items-center justify-center'
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
    );
}