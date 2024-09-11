import { useState } from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-primary py-8">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Logo y texto centralizados */}
                <a href="/" className="flex flex-col items-center mb-4">
                    <img src="/public/imagenes/logoN.png" alt="Rashel Nails & Spa Logo" className="w-16 h-16" />
                    <span className="mt-2 text-xl font-semibold text-black">Rashel Nails & Spa</span>
                </a>
                <div className="text-center text-black mb-4">
                    <div className="flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13401 2 5 5.13401 5 9c0 7 7 13 7 13s7-6 7-13c0-3.866-3.134-7-7-7z" />
                        </svg>
                        <p>Ubicado en A Coruña</p>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <p>Agra de Orzán 34 bajo 15010</p>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <p>Horario: Lu-Vi 9:30 am-7:00 pm Sab: 9:30 am-5:00 pm</p>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zM12 21a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        <p>+34 681 00 00 12</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v5m-4 4h8a1 1 0 001-1v-6m-10 7H4a1 1 0 01-1-1V8a1 1 0 011-1h8M5 8h2m4 0h2m-6 4h6" />
                        </svg>
                        <p>Correo electrónico: <a href="mailto:Rlisbehtb23@gmail.com" className="underline">Rlisbehtb23@gmail.com</a></p>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com/profile.php?id=61552162506459" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/rashelstudionails?igsh=MTl4a3U0NGViMnMydQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                        <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
