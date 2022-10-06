import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const searchValue = React.useRef('')

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  function handleSubmit (e){
    e.preventDefault();
  }

  function searchCocktail (){
    setSearch(searchValue.current.value)
  }
  return (
    <section className="section search" onSubmit={handleSubmit}>
      <form  className="search-form">
        <div className="form-control">
          <label htmlFor="name"> search for favourite drink</label>
          <input type="text" id='name' ref={searchValue}  onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
