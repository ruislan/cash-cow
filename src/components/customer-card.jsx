'use client';

import Image from 'next/image';

export default function CustomerCard({
    image,
    name,
    description
}) {
    return (
        <div className='flex flex-col p-4 border border-neutral-300 rounded'>
            <div className='w-full'>
                <p>
                    {description}
                </p>
            </div>
            <div className='w-full flex items-center gap-2'>
                {image &&
                    <Image
                        className='w-full h-full'
                        src={image}
                        width={280}
                        height={280}
                        alt={title}
                    />
                }
                <div>{name}</div>
            </div>
        </div>
    );
}