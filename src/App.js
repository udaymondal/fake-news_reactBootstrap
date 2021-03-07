
import { Button } from 'react-bootstrap';
import './App.css';
import News from './Components/News/News';

function App() {
  return (
    <div>
      <h2 className='text-white text-center bg-primary'>React Bootstrap</h2>
      <Button variant="success">Success</Button>
      <News></News>
    </div>
  );
}

export default App;
