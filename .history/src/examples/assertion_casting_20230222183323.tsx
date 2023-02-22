import { useEffect } from 'react';

const CastingType = () => {
  useEffect(() => {
    const input = document.querySelector('input') as HTMLInputElement;
    console.log(input.value);
  }, []);
  return <div></div>;
};

export default CastingType;
