import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';

function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
