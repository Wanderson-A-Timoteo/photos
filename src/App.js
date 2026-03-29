import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';

function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
