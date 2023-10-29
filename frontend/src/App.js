import './App.css';
import { Routes, Route } from "react-router-dom"
import { Header } from './components/Header/Header';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
