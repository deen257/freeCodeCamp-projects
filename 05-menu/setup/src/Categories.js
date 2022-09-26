import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {console.log(categories)}

      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {console.log(category)}
            {category}
          </button>
        )
      })}
    </div>
  )
};

export default Categories
