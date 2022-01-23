import Navbar from './components/navbar/navbar';
import Slide from './components/slide/slide';
import slideImages from './data/slideImageData';

const App = () => {
  return (
    <>
      <Navbar />
      <Slide slideImages={slideImages} />
    </>
  );
};

export default App;
