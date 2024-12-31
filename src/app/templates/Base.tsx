import React from 'react'
import Hero from './Hero'
import Partner from './Partner'
import WhatIs from './WhatIs'
import Offer from './Offer'
import GetInTouch from './GetInTouch'

const Base = () => {
  return (
    <div>
        <Hero />
        <Partner/>
        {/* <WhatIs/> */}
        <Offer/>
        <GetInTouch/>
    </div>
  )
}

export default Base