import React from 'react';

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      min="0"
      max="127"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;