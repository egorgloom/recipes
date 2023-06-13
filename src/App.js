import './App.css';
import Header from './components/header/Header';
import RecipeItem from './components/recipe-item/RecipeItem';


function App() {

  return (
    <div className="App">
      <Header />
      <RecipeItem
        recipe={{ id: 1, name: "Лазанья" }}
      />
      <RecipeItem
        recipe={{ id: 2, name: "Каша" }}
      />
      <RecipeItem
        recipe={{ id: 3, name: "Паста" }}
      />
    </div>
  );
}

export default App;