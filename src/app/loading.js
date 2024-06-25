import Spinner from '@/components/ui/spinner';

export default async function Loading() {

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <Spinner size='lg' />
            <span className='text-lg font-semibold'>Loading...</span>
        </div>
    );
}