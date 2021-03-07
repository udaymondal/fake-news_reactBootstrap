
import { Button } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';

function App() {
  return (
    <div>
      <h2 className='text-white text-center bg-primary'>React Bootstrap</h2>
      <Button variant="success">Success</Button>
      <News></News>
      <Header></Header>
    </div>
  );
}

export default App;
