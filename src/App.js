

import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h2 className='text-white text-center bg-warning'>Fake News using React Bootstrap</h2>
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
