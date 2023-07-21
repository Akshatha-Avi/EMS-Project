import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employeelist from './Components/Employeelist';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employeelist/>}></Route>
        <Route path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route path='/editEmployee/:id' element={<EditEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;

