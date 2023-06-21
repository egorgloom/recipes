import './App.css';
import Header from './components/header/Header';
import RecipeItem from './components/recipe-item/RecipeItem';
import { useGetRecipesQuery } from './store/api/api';
// import User from './components/user/User';


function App() {
  const { isLoading, data } = useGetRecipesQuery()

  return (
    <div className="App">
      <Header />
      {/* <User /> */}
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        data.map(recipe =>
          <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (<div>Not found</div>)}
    </div>
  );
}
export default App;
