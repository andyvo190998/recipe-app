import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/header.css"
import "../styles/card.css"


const Home = () => {
  const APP_ID = "11630471";
  const APP_KEY = "70d6f103a466772ea21c1a9d88c17b46";

  const [input, setInput] = useState()
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("");
  const [ingredients, setIngredients] = useState([])


  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data =>
        setRecipes(data.hits))
      // console.log(recipes)
  },[query])

  const handleOnclick = (e) => {
    e.preventDefault()
    setQuery(input)
    console.log("loaded")
  }

  const handleOnchange = (e) => {
    const userInput = e.target.value
    setInput(userInput)
  }
  return (
    <div>
              {/* Header */}
      <div className='header'>
        <h1>Find Recipes Here!</h1>
        <form className='search-form'>
          <input className='user-input' onChange={handleOnchange} type="text" />
          <button className='button' onClick={handleOnclick}>Find Recipe</button>
          <button className='button'><NavLink className="link" to="about">About</NavLink></button>
        </form>
      </div>

        {/* Recipe card */}
        <div className='recipe-card'>
          {recipes.map((item) => (
            <div className='recipe-card-item'>
              <h3 className='recipe-header' key={item.recipe.totalTime}>{item.recipe.label}</h3>
              <img className='recipe-img' src={item.recipe.image} alt="food picture"/>
              <div className='list-ingredients'>
                {item.recipe.ingredientLines.map(ingredients =>
                  <li className='recipe-ingredient'>{ingredients}</li>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Home