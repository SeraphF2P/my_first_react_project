import { Btn } from "./components/btn";
import { Container } from "./components/container";

function App() {
  return (
    <>
      <Container>
        <Btn type='normal' color='0,100,50' children='button' />
        <Btn type='normal' color='120,100,50' children='button' />
        <Btn type='normal' color='240,100,50' children='button' />
        <Btn type='skelaton' color='0,100,50' children='button' />
        <Btn type='skelaton' color='120,100,50' children='button' />
        <Btn type='skelaton' color='240,100,50' children='button' />
      </Container>
    </>
  );
}

export default App;
