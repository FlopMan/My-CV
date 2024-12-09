'use client';
import { useState } from 'react';

import { Assets } from '@/assets';
import { cn } from '@/lib/utils';

import { Icon } from '../base/icon/Icon';
import Dropdown from './Dropdown';

interface Option {
    label: string;
    value: string;
}

interface Props {
    items: Option[];
    className?: string;
    customLabel?: (option: Option) => string;
}

function SingleSelect(props: Props) {
    const { items, className, customLabel } = props;
    const [option, setOption] = useState(items[0]);

    return (
        <Dropdown
            items={items}
            className={className}
            itemClass="max-lg:!w-[calc(100vw-40px)] max-lg:py-5 dark:bg-[#222228] dark:border-[#222228] green:bg-[#222228] green:border-[#222228]"
            renderItems={(item, { close }) => {
                return (
                    <div
                        className={cn(
                            'block px-5 py-2 text-body-16 text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                            'transform transition-all duration-200 ease-out cursor-pointer',
                            'dark:text-white green:text-white light:text-light-primary'
                        )}
                        onClick={() => {
                            setOption(item);
                            close?.();
                        }}
                    >
                        {item.label}
                    </div>
                );
            }}
        >
            {() => (
                <button className="max-lg:w-full text-[#C1C1C1] green:text-[#C1C1C1] light:text-light-primary">
                    <div className="w-full cursor-pointer gap-2 rounded-[23px] border dark:border-[#E9E9E9] green:border-[#E9E9E9] light:border-light-primary px-5 py-2 flex-center max-lg:flex-center-between">
                        {customLabel?.(option) ?? option.label}
                        <Icon url={Assets.chevronDownIcon.src} size={16} />
                    </div>
                </button>
            )}
        </Dropdown>
    );
}

export default SingleSelect;
