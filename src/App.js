import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Home';
import Create from './Create';
import View from './View';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/Edit/:empid' element={<Edit/>}></Route>
        <Route path='/Veiw/:empid' element={<View/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
