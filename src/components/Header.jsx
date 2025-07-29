import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.png';
import '../assets/css/components/Header.css';
import { BsStars } from "react-icons/bs";

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {setShowHeader(false);} else {setShowHeader(true);}
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header px-24 h-24 w-full fixed z-50 top-0 left-0 flex justify-between items-center transition-all duration-500 ${showHeader ? 'opacity-100 h-24' : 'opacity-0 h-0'}`}>
            <a href='/' className="contain-img cursor-pointer h-24 w-24 flex items-center bg-white translate-y-8">
                <img src={Logo} alt="Logo" className="logo h-22 w-auto object-cover" />
            </a>
            <nav>
                <ul className='flex justify-between items-center h-full'>
                    <li><a href="/Orientate">Định Hướng <BsStars className='animate-pulse' /></a></li>
                    <li><a href="/Interview">Phỏng Vấn AI <BsStars className='animate-pulse' /></a></li>
                    <li><a href="/Course">Khóa Học</a></li>
                    <li><a href="/Introduction">Giới thiệu</a></li>
                    <li><a href="/Contact">Liên Hệ</a></li>
                    {/* <RiAccountCircleFill size={30} /> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;