import React, { useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = ({}) => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const { drinks } = data
          console.log(drinks[0])
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0]

          const ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name: name,
            image: image,
            category,
            glass,
            ingredient,
            info,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if(!cocktail){
    return <h2 className='section-title'> no cocktail to display</h2>
  }
  const {name, image, info, glass,ingredient, instructions, category} = cocktail
  return (
    <div className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <section className='drink'>
        <h2 className ='section-title'>{name}</h2>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'> name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'> category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'> info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'> glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'> instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'> ingredient: </span>
            {ingredient.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </section>
    </div>
  )
}

export default SingleCocktail
