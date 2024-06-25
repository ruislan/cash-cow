import { MailIcon, WhatsAppIcon } from '../ui/icons';
import Menus from './menus';

export default async function Header() {
    return (
        <header className='w-full mx-auto flex flex-col justify-center'>
            <div className='flex w-full items-center h-8 mx-auto gap-2 justify-end max-w-7xl'>
                <a
                    className='flex items-center gap-1 text-gray-700 hover:text-blue-700'
                    href='https://api.whatsapp.com/send?phone=18810561953'
                >
                    <WhatsAppIcon className='h-5 w-5' />
                    <span className='text-sm font-bold'>+86 188 1056 1953</span>
                </a>
                <div className='w-[1px] h-full bg-neutral-300 mx-2' />
                <a
                    className='flex items-center gap-1 text-gray-700 hover:text-blue-700'
                    href='mailto:18810561953@163.com'
                >
                    <MailIcon className='h-5 w-5' />
                    <span className='text-sm font-bold'>18810561953@163.com</span>
                </a>
            </div>
            <div className='w-full h-[1px] bg-neutral-300' />
            <Menus />
        </header>
    );
}