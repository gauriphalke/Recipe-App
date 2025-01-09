import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Navbar from './components/Navbar';
import './styles/index.css';
import Contact from './pages/Contact';
import About from './pages/About';
import SavePage from './pages/SavePage';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                     <Route path= "/about" element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/save' element={<SavePage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
