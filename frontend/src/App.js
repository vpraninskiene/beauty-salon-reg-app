import './App.css';
import { Routes, Route } from "react-router-dom"
import { Header } from './components/Header/Header';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
