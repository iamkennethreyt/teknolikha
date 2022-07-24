import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import Ripple from './components/Ripple';
import React from 'react';
import Transactions from './pages/Transactions';
import Inventory from './pages/Inventory';

import { useSelector, useDispatch } from 'react-redux';
import Accounts from './pages/Accounts';

function App() {
  const { user } = useSelector((state) => state.auth);

  // if (!user) {
  //   navigate('/login');
  // }

  return (
    <>
      <Router>
        <div>
          {/* <Header /> */}

          <Nav />

          {user && (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <Ripple />
                </div>
                <div className='col-md-8 border mt-2 border-rounded'>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/accounts' element={<Accounts />} />
                  </Routes>
                </div>
              </div>
            </div>
          )}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
