'use client';
import {
    ChangeEventHandler,
    FocusEventHandler,
    forwardRef,
    KeyboardEventHandler,
    useEffect,
    useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { cn } from '@/lib/utils';

import { Icon, IIConProps } from '../icon/Icon';

export type IInputProps = {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    maxLength?: number;
    leftIconProps?: IIConProps;
    rightIconProps?: IIConProps;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onKeydown?: KeyboardEventHandler<HTMLInputElement>;
    className?: string;
    labelClassName?: string;
};

const InputText = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            value,
            label,
            placeholder = '',
            required = false,
            disabled = false,
            onChange,
            onBlur,
            error,
            maxLength,
            leftIconProps,
            rightIconProps,
            className,
            onKeydown,
            labelClassName,
        }: IInputProps,
        ref
    ) => {
        const [elementId, setElementId] = useState('');

        useEffect(() => {
            setElementId(uuidv4());
        }, []);

        return (
            <div className={cn(className)}>
                <label
                    htmlFor={elementId}
                    className={cn('mb-2', 'text-greyScale-40 text-label1-medium', labelClassName)}
                >
                    {label} {required ? <span className="text-error">*</span> : ''}
                </label>
                <div className="relative w-full">
                    <input
                        ref={ref}
                        id={elementId}
                        className={cn(
                            'rounded-sm border border-gray-200 text-body-16',
                            'px-3 py-3 w-full',
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
                            error && '!border-b-error',
                            rightIconProps ? 'pr-10' : 'pr-3',
                            leftIconProps ? 'pl-10' : 'pl-3'
                        )}
                        type="text-inputField"
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                        maxLength={maxLength}
                        onKeyDown={onKeydown}
                    />
                    {leftIconProps && (
                        <div
                            className="absolute inset-y-0 left-0 z-[10] flex items-center pl-3 text-greyScale-20 "
                            onClick={leftIconProps.onClick}
                        >
                            <Icon {...leftIconProps} />
                        </div>
                    )}
                    {rightIconProps && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-greyScale-20">
                            <Icon {...rightIconProps} />
                        </div>
                    )}
                    {error && (
                        <span
                            className={cn(
                                'absolute left-0 top-full text-[14px] leading-[21px] text-error'
                            )}
                        >
                            {error}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);
InputText.displayName = 'InputText';
export default InputText;
