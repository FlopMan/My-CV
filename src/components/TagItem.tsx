import { cn } from '@/lib/utils';

function TagItem({ label, className }: { label: string; className?: string }) {
    return (
        <div
            className={cn(
                'rounded-[32px] border px-6 py-2 text-white text-body-16',
                'max-lg:text-normal-14',
                'light:border-light-primary light:text-light-primary',
                'dark:text-white dark:border-[#CCDDFE0D] dark:bg-[#CCDDFE0D] ',
                'green:text-white green:border-[#CCDDFE0D] green:bg-[#CCDDFE0D] ',
                className
            )}
        >
            {label}
        </div>
    );
}

export default TagItem;
