import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer'

function App() {
  return (
    <div className='App'>
      <br />
      <header className="container-fluid">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cursos" element={<ItemListContainer />} />
          <Route path="/cursos/categoria/:id" element={<ItemListContainer />} />
          <Route path="/cursos/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <footer></footer>
    </div>

  );
}

export default App;
