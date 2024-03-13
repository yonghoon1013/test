import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import My from './pages/My';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='list' element={<List/>}></Route>
        <Route path='my' element={<My/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
