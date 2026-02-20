import React, { useState } from 'react'
import './App.css'

function App() {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    skills:[],
    address: "",
    state: "",
  });

  const statesOfIndia = [
    "Haryana",
    "Punjab",
    "West Bengal",
    "Madhya Pradesh",
    "Assam"
  ];

  const skillsList = [
    "C++",
    "Python",
    "Java",
    "Full Stack Development",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({...formData, skills: [...formData.skills, value] });
    } else {
      setFormData({...formData, skills: formData.skills.filter(skill => skill !== value) });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const userDetails = `
User Details:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.length > 0 ? formData.skills.join(", ") : "None"}
Address: ${formData.address}
State: ${formData.state}
  `;

  alert(userDetails);
  console.log(formData);
};

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      skills:[],
      address: "",
      state: "",
    });
  };
  
  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          max={today}
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />
            Female
          </label>
        </div>

        <label>Skills:</label>
        <div className="checkbox-group">
          {skillsList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>State:</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">-- Select State --</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );  
}
export default App
