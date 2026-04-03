import { HashRouter, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Item from './components/Item';
import NotFound from './components/NotFound';
import Search from './components/Search';


function SearchWrapper() {
  const { searchInput } = useParams();
  return <Search searchTerm={searchInput} />;
}

function HeaderWrapper() {

  const navigate = useNavigate();
  
  function handleSubmit(event, searchInput) {
    event.preventDefault();
    event.currentTarget.reset();
    navigate(`/search/${searchInput}`);
  };

  return <Header handleSubmit={handleSubmit} />;

}

function App() {
  return (
    <PhotoContextProvider>
      <HashRouter>
        <div>
          <HeaderWrapper />

          <Routes>
            {/* Rota Inicial */}
            <Route path="/" element={<Navigate to="/Islands" replace />} />

            {/* Rotas para as categorias */}
            <Route path="/Islands" element={<Item searchItem="Islands" />} />
            <Route path="/Architecture" element={<Item searchItem="Architecture" />} />
            <Route path="/Coding" element={<Item searchItem="Coding" />} />
            <Route path="/Coffee" element={<Item searchItem="Coffee" />} />

            {/* Rota dinâmica para busca */}
            <Route path="/search/:searchInput" element={<SearchWrapper />} />

            {/* Rota para itens não encontrados */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
