import CustomText from '../custom-text/custom-text';
import CustomButton from '../custom-button/custom-button';
import { useState } from 'react';

function ButtonCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <CustomText text={`Button ${props.name} count: ${count}`} />
      <CustomButton
        text={`Button ${props.name}`}
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </>
  );
}

export default ButtonCounter;
