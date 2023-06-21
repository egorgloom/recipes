import './App.css';
import Header from './components/header/Header';
import RecipeItem from './components/recipe-item/RecipeItem';
import User from './components/user/User';




function App() {
  
  return (
    <div className="App">
      <Header />
      <User />
      <RecipeItem recipe={{
        id: 1,
        name: 'Лазанья'
      }} />
      <RecipeItem recipe={{
        id: 2,
        name: 'Паста'
      }} />
      <RecipeItem recipe={{
        id: 3,
        name: 'Каша'
      }} />
    </div>
  );
}

export default App;
