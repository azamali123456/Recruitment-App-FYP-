import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'react-toastify/dist/ReactToastify.css'
import Main from './main'
import PaymentPage from './component/payment'
import '@stripe/stripe-js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact Component={Main} />
        <Route path='/payment/:1' exact Component={PaymentPage} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
