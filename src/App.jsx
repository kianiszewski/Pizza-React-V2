import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import RegisterPage from './components/Register/Register';
import LoginPage from './components/LoginPage/LoginPage';



function App() {
  return (
    <>
    <Navbar/>
{/*     <Home/> */}
{/*     <RegisterPage/> */}
    <LoginPage/>
    <Footer/>
    </>
  );
}

export default App;
