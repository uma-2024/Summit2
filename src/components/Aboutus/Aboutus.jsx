import React from 'react'
import headerImage from '../../Assets/Images/aboutImage.jpeg'
import './Aboutus.css'
const Aboutus = () => {
  return (
    <section id="Aboutus">

    <div className='aboutus-container'>
      <div>
      <img src={headerImage}/>
      </div>
      <div className='about-content'>
        <h3>About Us</h3>
        <p> Our mission is simple—unite communities, empower them to grow, and reward them for their participation. We’re building more than a token; we’re creating a movement that transforms how people engage in the decentralized world of blockchain.
          <br/> Whether you're hosting an event or simply participating, your actions directly contribute to the thriving ecosystem that defines the Unite-to-Earn platform.
        </p>
      </div>
    </div>
    </section>
  )
}

export default Aboutus
