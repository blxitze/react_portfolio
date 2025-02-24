import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TypingEffect() {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer', 
        1000,                
        'FrontEnd Developer',
        1000,
        'Backend Developer',
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.2em', display: 'inline-block' }}
    />
  );
}

export default TypingEffect;
