import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<AddStudent/>}/>
  <Route path='/Delete' element={<Delete/>}/>
  <Route path='/View' element={<View/>}/>
  <Route path='/SearchStudent' element={<SearchStudent/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
