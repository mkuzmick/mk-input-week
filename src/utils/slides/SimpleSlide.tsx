import { ReactNode } from 'react';

interface SimpleSlideProps {
    children: ReactNode;
}
const SimpleSlide = ({children}: SimpleSlideProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default SimpleSlide