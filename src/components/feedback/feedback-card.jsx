'use client';

import Image from 'next/image';

export default function FeedbackCard({
    name,
    industry,
    description
}) {
    return (
        <div className='flex flex-col gap-4 p-4 border border-neutral-300 rounded'>
            <div className='w-full flex-1 text-gray-800'>
                &ldquo;
                {description}
                &rdquo;
            </div>
            <div className='flex items-center gap-2 w-full justify-between'>
                <div>
                    {name}
                </div>
                <div>
                    {industry}
                </div>
            </div>
        </div>
    );
}