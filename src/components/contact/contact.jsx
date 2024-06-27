'use client';

import { MailIcon, MapPinIcon, TimeZoneIcon, WhatsAppIcon } from '../ui/icons';
import Image from 'next/image';

export default function Contact() {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mb-8 px-3 md:px-0'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2 p-4 border border-neutral-300 rounded-md w-full'>
                    <div className='flex items-center gap-2'>
                        <TimeZoneIcon className='h-8 w-8 text-blue-700' />
                        <span className='text-xl font-semibold'>Business Hours</span>
                    </div>
                    <div className='text-gray-700 text-lg'>
                        Inquiry, co-op or procurement
                    </div>
                    <div className='text-xl'>
                        Monday ～ Friday, 9:00 to 19:00 CST
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-4 border border-neutral-300 rounded-md w-full'>
                    <div className='flex items-center gap-2'>
                        <WhatsAppIcon className='h-8 w-8 text-blue-700' />
                        <span className='text-xl font-semibold'>Whatsapp</span>
                    </div>
                    <div className='text-xl'>+86 188 1056 1953</div>
                </div>
                <div className='flex flex-col gap-2 p-4 border border-neutral-300 rounded-md w-full'>
                    <div className='flex items-center gap-2'>
                        <MailIcon className='h-8 w-8 text-blue-700' />
                        <span className='text-xl font-semibold'>Email</span>
                    </div>
                    <div className='text-xl'>18810561953@163.com</div>
                </div>
                <div className='flex flex-col gap-2 p-4 border border-neutral-300 rounded-md w-full'>
                    <div className='flex items-center gap-2'>
                        <MapPinIcon className='h-8 w-8 text-blue-700' />
                        <span className='text-xl font-semibold'>Address</span>
                    </div>
                    <div className='text-xl'>ROOM 2012 BUILDING A,NO.1301,GONGHEXIN ROAD,SHANGHAI 200070,CHINA</div>
                </div>
            </div>
            <div className='flex flex-col border border-neutral-300 rounded-md w-full'>
                <Image
                    className='h-full object-cover'
                    src='/address-map.png'
                    width='640'
                    height='480'
                    alt='address'
                />
            </div>
        </div>
    )
}