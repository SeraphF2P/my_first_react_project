import { GlobalStyled } from './global.stayled'
import Btn from './components/btn.js';
function App() {
  return (
    <>
      <GlobalStyled />
      <Btn type='normal' color='blue' content='button' />
      <Btn type='skelaton' color='blue' content='button' />
      <Btn type='normal' color='red' content='button' />
    </>
  );
}

export default App;
