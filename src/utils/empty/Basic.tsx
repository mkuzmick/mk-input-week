import {ReactNode} from 'react';

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

export default Component;