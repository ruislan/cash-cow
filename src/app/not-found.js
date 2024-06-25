import Link from 'next/link';

export default async function NotFound() {
    return (
        <div className='m-32 mx-auto flex flex-col w-full max-w-2xl'>
            <h2 className='text-2xl font-bold mt-8 mb-4 uppercase'>404:THE REQUEST PAGE WAS NOT FOUND</h2>
            <p className='text-lg'></p>
            <div className='flex items-center mt-4 gap-2'>
                <Link href='/' className='underline underline-offset-2 font-semibold'>Home</Link>
            </div>
        </div>
    );
}