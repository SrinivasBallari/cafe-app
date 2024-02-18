import Register from "./pages/auth/Register"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./pages/auth/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

  const isRegisterOrLoginRoute = () => {
    const currentPath = window.location.pathname;
    return currentPath === '/register' || currentPath === '/login';
  };

  const renderNavbar = () => {
    return !isRegisterOrLoginRoute() && <Navbar />;
  };

  return (  
      <>
        <BrowserRouter>
        {renderNavbar()}
                <Routes>
                    <Route path="/" element = { <Home/>} /> 
                    <Route path='/register' element={ <Register/> } />
                    <Route path='/login' element={ <Login/> } />
                </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
