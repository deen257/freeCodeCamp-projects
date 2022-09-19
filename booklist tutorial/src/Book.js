import React from 'react'

const Book = (props) => {
  const { author, title, img } = props
  const clickHandler = () => {
    alert('hello world')
  }
  const moreComplex = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='book image'></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        hello
      </button>
      <button type='button' onClick={() => moreComplex(author)}>
        moreComplex
      </button>
    </article>
  )
}
 

export default Book