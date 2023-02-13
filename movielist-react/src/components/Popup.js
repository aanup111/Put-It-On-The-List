import React from 'react'

const Popup = ({open}) => {
    if(!open) return null
    return (
    <div className='overlay'>
        <div class="happy-valentines">
<div class="valentines-day-card">
  <div class="clouds"></div>
  <div class="hearts">
    <div class="heartOne">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
    <div class="heartTwo">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
        <div class="heartThree">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
     <div class="heartFour">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
     <div class="heartFive">
     <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
  </div>
  <div class="text"><span>💚Will You Be My Valentine?❣💚<br></br><br></br> 🥰 hover over me 🥰</span></div>
</div>
<p class="hover">- hover over the text -</p>
</div>
        </div>
  )
}

export default Popup