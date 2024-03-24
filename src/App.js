import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Delievery from './components/Delievery';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Meal from "./components/Meal";
import Nav from "./components/Nav"
import NewsLetter from "./components/NewsLetter"
import TopPicks from './components/TopPicks';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <div className="App">
      <Nav />
      <Featured />
      <Delievery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter/>
      <Footer />
      <Routes>
          <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
