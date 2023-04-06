import React from 'react'
import './Questions.scss'

function Questions() {
  return (
    <div className='questions'>
        <h1>Have Question in Mind? Let us help you</h1>
        <form>
           
        <input type="text" className='text' placeholder='Enter your question'/>
            <button>Send</button>


        </form>
       

            
        

    </div>
  )
}

export default Questions