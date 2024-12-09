import dynamic from 'next/dynamic';
import { CSSProperties, ReactNode, Suspense } from 'react';

import { cn } from '@/lib/utils';

import Footer from './Footer';
const ScrollToTopButton = dynamic(() => import('../base/button/ScrollToTopButton'), { ssr: false });

interface IProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function MainLayout({ children, style, className }: IProps) {
    return (
        <div className="relative">
            <div className={cn('mx-auto w-full')} style={style}>
                <Suspense fallback={null}>
                    <ScrollToTopButton />
                </Suspense>
                <div className={cn(className)}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}
