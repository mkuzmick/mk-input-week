import { ReactNode } from 'react';

interface BoxLinkProps {
    children: ReactNode;
}
const BoxLink = ({children}: BoxLinkProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default BoxLink