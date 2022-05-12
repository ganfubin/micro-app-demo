import React, {useState, useCallback} from 'react';


const ButtonNum = () => {
  const [num, setNum] = useState(0)
  const handleClick = useCallback(() => {
    setNum((num) => num + 1)
  }, [])
  return <button onClick={handleClick}>{num}</button>;
};

export default ButtonNum;
