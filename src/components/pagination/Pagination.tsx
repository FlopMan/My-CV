import React from 'react';

import { Assets } from '@/assets';
import { cn } from '@/lib/utils';

import { Icon } from '../base/icon/Icon';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex-center">
            <ul className="gap-4 flex-center text-white">
                <button className="h-[42px] w-[42px] rounded-full dark:bg-[#1A1A1E] green:bg-[#1A1A1E] light:bg-white flex-center">
                    <Icon
                        className="dark:text-white green:text-white light:text-light-primary light:border light:border-black"
                        url={Assets.arrowLeftIcon.src}
                        size={15}
                        height={10}
                    />
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                    .slice(0, 3)
                    .map((number) => (
                        <li key={number}>
                            <button
                                className={cn(
                                    'h-[42px] w-[42px] rounded-full flex-center text-body-16',
                                    number === currentPage
                                        ? 'bg-theme-primary green:text-[#131414]'
                                        : 'dark:bg-[#1A1A1E] green:bg-[#1A1A1E]  light:bg-white light:text-light-primary'
                                )}
                                onClick={() => onPageChange(number)}
                            >
                                {number < 10 && '0'}
                                {number}
                            </button>
                        </li>
                    ))}
                <button className="h-[42px] w-[42px] rounded-full dark:bg-[#1A1A1E] green:bg-[#1A1A1E] light:bg-white  flex-center">
                    <Icon
                        className="dark:text-white green:text-white light:text-light-primary light:border light:border-black"
                        url={Assets.arrowRightIcon.src}
                        size={15}
                        height={10}
                    />
                </button>
            </ul>
        </div>
    );
};

export default Pagination;
