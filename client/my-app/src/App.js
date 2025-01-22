import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import Read from './components/Read';


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;