import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Rota Inicial */}
          <Route path="/" element={<Navigate to="/Islands" replace />} />

          {/* Rotas para as categorias */}
          <Route path="/Islands" element={<Item searchItem="Islands" />} />
          <Route path="/Architecture" element={<Item searchItem="Architecture" />} />
          <Route path="/Coding" element={<Item searchItem="Coding" />} />
          <Route path="/Coffee" element={<Item searchItem="Coffee" />} />
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
