import { ReactNode } from 'react';

interface PhoneProps {
    children: ReactNode;
}
const Phone = ({children}: PhoneProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <Phone>
                Phone content
            </Phone>
        </main>
    )
}