import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Content/>
        </BrowserRouter>
      </div>
  );
}

export default App;
