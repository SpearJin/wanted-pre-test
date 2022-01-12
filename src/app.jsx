import './app.css';
import Navbar from './components/navbar/navbar';
import Slide from './components/slide/slide';

const slideImages = [
  { id: 1, image: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg', order: 1 },
  { id: 2, image: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg', order: 2 },
  { id: 3, image: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', order: 3 },
  { id: 4, image: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg', order: 4 },
  { id: 5, image: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg', order: 5 },
  { id: 6, image: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg', order: 6 },
];

function App() {
  return (
    <>
      <Navbar />
      <Slide slideImages={slideImages} />
    </>
  );
}

export default App;
