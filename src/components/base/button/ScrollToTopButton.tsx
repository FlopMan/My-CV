'use client';
import { useEffect, useState } from 'react';

import { Assets } from '@/assets';
import { cn } from '@/lib/utils';

import { Icon } from '../icon/Icon';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'bg-white-500 !border-1 fixed bottom-14 right-4 rounded-full p-2 shadow-lg transition-opacity w-12 h-12 border max-lg:block hidden',
                isVisible ? 'opacity-100' : 'opacity-0',
                'group z-[100] bg-white transition-colors duration-150 ease-in-out hover:bg-blue-500 border'
            )}
        >
            <Icon
                url={Assets.arrowTopIcon.src}
                size={20}
                className="text-black group-hover:text-white"
            />
        </button>
    );
};

export default ScrollToTopButton;
