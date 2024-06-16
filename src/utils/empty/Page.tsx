import { ReactNode } from 'react';

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
    <main>
        <Component>
            content
        </Component>
    </main>
  )
}
