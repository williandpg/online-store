import * as api from './services/api';
import './App.css';

api.getCategories().then((categories) => { console.log(categories); });
api.getProductsFromCategoryAndQuery('MLB271599', 'Agro').then((a) => { console.log(a); });
api.getProductById('MLB3174626530').then((product) => { console.log(product); });

function App() {
  return (
    <div className="App" />
  );
}

export default App;
