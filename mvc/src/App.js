import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Components/Home'
import { Login } from './Components/Login/Login'
import { UserStorange } from './UserContext'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorange>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorange>
      </BrowserRouter>
    </div>
  );
}

export default App;