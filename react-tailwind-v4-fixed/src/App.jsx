<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
// src/App.jsx
import React from 'react';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};
>>>>>>> 12aaacda9653fa585c30ffe38dfe05547878fbe7

export default App;
