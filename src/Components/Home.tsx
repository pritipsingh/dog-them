import React from 'react'
import dog from './dog1.png'
const Home = () => {
  return (
    <div className='main_container'>
    <div className="container_dog">
        <span className="letter">D</span>
        <span className="letter o">
            O 
            <img src={dog} alt="Dog Image" className="dog-image" />
        </span>
        <span className="letter">G</span>
    </div>
    </div>
  )
}

export default Home