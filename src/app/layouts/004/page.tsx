import { ReactNode } from 'react';
import MacBookScroll from '@/components/ui/MacBookScroll';

interface ComponentProps {
    children: ReactNode;
}
const Component = ({children}: ComponentProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main className='overflow-hidden dark:bg-[#0B0B0F] bg-white w-full'>
            <MacBookScroll />
        </main>
    )
}

