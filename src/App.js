import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    newsletter: true
  })

  function handleChange(event) {
    setFormData(prevData => {
      const { name, value, type, checked } = event.target
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault()

    formData.password === formData.passwordConfirm ? console.log('Successfully signed up') : console.log("Passwords do not match")

    formData.newsletter === true && console.log("Thanks for signing up for our newsletter!")
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name='passwordConfirm'
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name='newsletter'
            onChange={handleChange}
            checked={formData.newsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className="form--submit">Sign up</button>
      </form>
    </div>
  )
}

export default App;
