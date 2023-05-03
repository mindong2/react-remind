import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import TvShow from './components/TvShow';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/tv' element={<TvShow />} />
       {/* <Route path='/search' element={<Search />} /> */}
      </Routes>
    </>
  );
};

export default App;
