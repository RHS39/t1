import React from 'react'
import "../styles/Contact.scss";
const contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1> Contact Us</h1>
        <form >
          <div>
            <label >Name</label>
            <input type="text" required placeholder='Abc' />
          </div>

          <div>
            <label >Email</label>
            <input type="email" required placeholder='Abc@kriss.com' />
          </div>

          <div className='message'>
            <label >Message</label>
            <input type="textarea"  required placeholder='Describe your query' />
          </div>
          <div className='button'>
            <button type='submit'>Aks us</button>
            <button type='reset'>Clear</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default contact