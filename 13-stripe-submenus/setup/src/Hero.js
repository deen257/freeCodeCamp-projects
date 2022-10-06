import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenubar } = useGlobalContext()



  return (
    <section className='hero' onMouseOver={closeSubmenubar}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dignissimos, numquam modi incidunt officiis tempore delectus
            eligendi velit exercitationem temporibus!
          </p>
          <button className='btn'> start now</button>
        </article>
        <article className='hero-images'>
          {' '}
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
