import React, { useState } from 'react'
import "./TeddyForm.css"

function TeddyForm({ addTeddy }) {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    age: undefined,
    gender: "",
    story: ""
  })

  function handleChange(event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput
    })
  }

  function handleSubmit(event) { 
    event.preventDefault();
    const teddy = {
      name: formState.name,
      image: formState.image,
      gender: formState.gender,
      age: parseInt(formState.age),
      story: formState.story,
    };
    addTeddy(teddy);
  }

  return (
    <div className="teddy-form">
      <h2 className="teddy-form-heading">Give A Teddy</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input 
            type="text" 
            name="name" 
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label>
          image:
          <input
            type="text"
            name="image"
            value={formState.image}
            onChange={handleChange}
          />
        </label>
        <label>
          age:
          <input
            type="text"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <label>
          gender:
          <input
            type="text"
            name="gender"
            value={formState.gender}
            onChange={handleChange}
          />  <label>
          story:
          <input
            type="text"
            name="story"
            value={formState.story}
            onChange={handleChange}
          />
        </label>
        </label>
        <button type="submit">Give A Teddy</button>
      </form>
    </div>
  )
}

export default TeddyForm;