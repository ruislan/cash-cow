import Brand from './brand';
import Contact from './contact';
import DrawMenus from './draw-menus';
import Menus from './menus';

const menus = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];

export default async function Header() {
    return (
        <header className='w-full mx-auto flex flex-col justify-center'>
            <Contact />
            <div className='w-full h-[1px] bg-neutral-300' />
            <div className='flex items-center h-16 w-full max-w-7xl mx-auto md:px-0 px-3 justify-between md:justify-start'>
                <Brand />
                <Menus menus={menus} />
                <DrawMenus menus={menus} />
            </div>
        </header>
    );
}