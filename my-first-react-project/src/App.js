import { GlobalStyled } from './global.stayled';
import { Btn } from './components/btn.js';

import React from 'react';
function App() {
  return (
    <>
      <GlobalStyled />
      <Btn type='skelaton' color='blue'>button</Btn>
      <Btn type='skelaton' color='blue'  >button</Btn>
      <Btn type='normal' color='red' >button</Btn>
    </>
  );
}

export default App;
