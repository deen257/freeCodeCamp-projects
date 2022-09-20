import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tour, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tour.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
    console.log('use effected called')
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no more tours</h2>
          <button
            className='btn'
            onClick={() => {
              fetchTours()
            }}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <>
      <Tours tours={tour} removeTour={removeTour} />
    </>
  )
}

export default App
