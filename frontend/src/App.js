import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages and compponent
import Home from './pages/Home'
import Navbar from './Components/navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
            path="/"
            element={<Home />}
            />  
            <Route
            path="/Login"
            element={<Login />}
            /> 
            <Route
            path="/Signup"
            element={<Signup />}
            /> 
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
