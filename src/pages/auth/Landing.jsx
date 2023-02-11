import React from 'react'
import Header from '../../components/header'

const Landing = () => {
  return (
    <div>
      <Header isPublic={true} />
      <main className='hero'>

        <div className='hero__content'>
          <h3 className='hero__title'>
            we help you grow
          </h3>
          <p className='hero__tagline'>
            your home for help
          </p>
          <button className='cta'>
            Start FundMia
          </button>
        </div>


      </main>
      Landing page content
    </div>
  )
}

export default Landing