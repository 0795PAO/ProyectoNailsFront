import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const btnLink = 'block py-2 text-black hover:text-accent cursor-pointer mr-4';
    return (
        <header className="w-full text-gray-600 body-font bg-white shadow-md">
            <div className="w-full flex flex-wrap p-5 flex-col md:flex-row items-center justify-between px-4">
                <a href="/" className="flex items-center mb-4 md:mb-0">
                    <img src="/public/imagenes/logo.png" alt="Rashel Nails & Spa Logo" className="w-10 h-10" />
                    <span className="ml-3 text-xl font-semibold text-black">Rashel Nails & Spa</span>
                </a>
                <button className="inline-flex items-center md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24" strokeLinecap="round">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav className={`md:flex md:flex-wrap items-center text-base justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <a className={btnLink}>HOME</a>
                    <a className={btnLink}>SERVICIOS</a>
                    <a className={btnLink}>GALERIA</a>
                    <a className={btnLink}>CONTACTO</a>
                    <a className={btnLink}>OFERTA DEL MES</a>
                    <a className={btnLink}>RESERVAR ONLINE</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
