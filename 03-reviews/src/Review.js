import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const randomSelection = () => {
    const random = Math.floor(Math.random() * 4)
    setIndex(random)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />

        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <button
        onClick={() => setIndex(index ? index - 1 : people.length - 1)}
        className='prev-btn'
      >
        <FaChevronLeft />
      </button>
      <button onClick={randomSelection} className='random-btn'>
        random
      </button>

      <button
        onClick={() =>
          setIndex(index < people.length - 1 ? index + 1 : people.length - 4)
        }
        className='next-btn'
      >
        <FaChevronRight />
      </button>
    </article>
  )
}

export default Review
