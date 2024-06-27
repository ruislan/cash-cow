'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon } from '../ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function DrawMenus({ menus }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <div
                className='md:hidden flex items-center cursor-pointer'
                onClick={toggle}
            >
                {isOpen
                    ? <CloseIcon className='w-6 h-6 text-gray-900' />
                    : <MenuIcon className='w-6 h-6 text-gray-900' />
                }
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, top: -10 }}
                        animate={{ opacity: 1, top: 0 }}
                        className={clsx(
                            'fixed inset-0 bg-white mt-24 w-full h-full z-50',
                        )}
                    >
                        <div className='flex flex-col gap-2 p-4'>
                            {menus.map((menu, index) => (
                                <div
                                    key={index}
                                    className='flex items-center'
                                >
                                    <Link
                                        className={clsx(
                                            'font-semibold hover:font-bold text-lg hover:text-blue-700 select-none cursor-pointer',
                                            (menu.url === '/' ? pathname === '/' : pathname.startsWith(menu.url)) ? 'text-blue-700' : 'text-gray-900'
                                        )}
                                        onClick={toggle}
                                        href={menu.url}
                                    >
                                        {menu.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}