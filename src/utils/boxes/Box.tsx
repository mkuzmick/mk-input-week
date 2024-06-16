import { ReactNode } from 'react';

interface ColorVarBoxProps {
  children: ReactNode;
  color: string;
}

const ColorVarBox = ({ children, color }: ColorVarBoxProps) => {
  return (
    <div style={{
        backgroundColor: `var(--${color})`,
    }}>
      {children}
    </div>
  );
};

export default ColorVarBox;