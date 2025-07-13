import { useState } from 'react';

function useToggleItems(initialValue, initialPosition = 0) {
  const [index, setIndex] = useState(initialPosition);

  const toggleState = () => {
    setIndex(prev => (prev + 1) % initialValue.length);
  };

  return [initialValue[index], toggleState];
}

export default useToggleItems;
