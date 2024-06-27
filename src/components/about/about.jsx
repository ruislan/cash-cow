'use client';

import Image from 'next/image';

export default function About() {
    return (
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-4 mb-10 px-3 md:px-0'>
            <div className='flex flex-col gap-2 p-2'>
                <h3 className='text-2xl font-semibold mb-4'>TianTe international Co. Limited.</h3>
                <p>We focus on valve, piping and falange.</p>
                <p>We service the Food, Dairy, Beverage, Cosmetic, Pharmaceutical, Biological engineering, Water treatment, Petroleum and Chemical industries.</p>
                <p>Through the years, &quot;Perfection&quot; has been the only goal we pursue. In order to satisfy customers, with continuous efforts, we are working towards perfection through a Quality Assurance System. With persistence and effort, we have become one of the leading enterprises of sanitary valves and pipe fittings in China. </p>
                <p>We dedicated to provide our customers with best service of every aspect. We strongly believe, that the friendship and trust given by our customers, is the great treasure we have.</p>
            </div>
            <div className='flex p-2'>
                <Image
                    className='w-full rounded max-h-96'
                    src='/us.jpg'
                    width='600'
                    height='480'
                    alt='us'
                />
            </div>
        </div>
    );
}