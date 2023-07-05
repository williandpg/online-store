// Api
import * as api from './services/api';

// Pages
import Home from './pages/home';

// Css
import './App.css';

// api.getCategories().then((categories) => { console.log(categories); });
// api.getProductsFromCategoryAndQuery('MLB271599', 'Agro').then((a) => { console.log(a); });
// api.getProductById('MLB3174626530').then((product) => { console.log(product); });

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
