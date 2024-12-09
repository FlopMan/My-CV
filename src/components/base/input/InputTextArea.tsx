'use client';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { cn } from '@/lib/utils';

export type IInputTextAreaProps = {
    value?: string;
    label?: string;
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    maxLength?: number;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    className?: string;
};

export default function InputTextArea({
    value,
    label,
    placeholder,
    required = false,
    disabled = false,
    onChange,
    error,
    maxLength,
    className,
}: IInputTextAreaProps) {
    const [elementId, setElementId] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        setElementId(uuidv4());
    }, []);

    // Resize the textarea to fit the content
    const resizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height to auto
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on scroll height
        }
    };

    useEffect(() => {
        resizeTextarea();
    }, [value]);

    const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if (onChange) {
            onChange(e);
        }
        resizeTextarea();
    };

    return (
        <div className={cn('relative w-full ', className)}>
            <label
                htmlFor={elementId}
                className={cn('mb-2', 'text-greyScale-40 text-label1-medium')}
            >
                {label} {required ? <span className="text-error">*</span> : ''}
            </label>
            <textarea
                id={elementId}
                ref={textareaRef}
                className={cn(
                    'rounded-sm border border-gray-200 text-body-16',
                    'px-3 py-3',
                    'max-h-[300px] min-h-[140px] w-full',
                    'text-light-primary',
                    'placeholder:text-[#888890] placeholder:text-body-16',
                    'transition-colors',
                    'hover:border-b-neutral-3',
                    'focus:border-b-neutral-3',
                    'focus:ring-1 focus:ring-primary-blue-500',
                    'focus:outline-none focus:ring-1',
                    error
                        ? '!ring-[1.2px] !ring-error'
                        : 'focus:border-primary-blue-500 focus:ring-primary-blue-500',
                    error && '!border-b-error'
                )}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                disabled={disabled}
                maxLength={maxLength}
                style={{ overflow: 'hidden', resize: 'none' }} // Disable manual resize
            />

            {error && (
                <span
                    className={cn(
                        'absolute left-0 top-[95%] text-[14px] leading-[21px] text-error'
                    )}
                >
                    {error}
                </span>
            )}
        </div>
    );
}
