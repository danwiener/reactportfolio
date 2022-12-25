import React from 'react'
import Header from '.././components/Header'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>

      <Header />


      <div className="introduction flex-with-center" style={{backgroundImage:`url(./libg3.png)`}}>
        <div>
          <h1>DAN WIENER</h1>

          <div className='intro-content d-flex justify-content-between'>
            <p id="intro-p">.NET Stack <br /> Dedicated , Software Engineer</p>
            <button className='primary-button font-bold'>GET STARTED</button>
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  )
}

{/* <i className="fa-solid fa-lightbulb"></i> */}

{/* <div className="colz-icon flex-with-center">
<a href="https://github.com/danwiener">
  <i className="fa-brands fa-square-github"></i>
</a>
<a href="https://www.linkedin.com/in/henrikwiener/">
<i className="fa-brands fa-linkedin"></i>
</a>
</div> */}