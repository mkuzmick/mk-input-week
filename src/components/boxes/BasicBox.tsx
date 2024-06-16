import { ReactNode } from 'react';

interface BasicBoxProps {
    children: ReactNode;
}
const BasicBox = ({children}: BasicBoxProps) => {
    return (
        <div className="bg-blue-300 p-4 rounded-lg w-8 h-12">
            {children}
        </div>
    );
}

export default BasicBox