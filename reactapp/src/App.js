import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    password: "",
    email: "",
    number: "",
    date: "",
    time: "",
    color: "#000000",
    gender: "",
    skills: [],
    file: null,
    message: "",
    range: 50,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>All Input Types Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <label>
          Name:
          <input type="text" name="text" value={formData.text} onChange={handleChange} required />
        </label>

        {/* Password Input */}
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        {/* Email Input */}
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        {/* Number Input */}
        <label>
          Age:
          <input type="number" name="number" value={formData.number} onChange={handleChange} required />
        </label>

        {/* Date Input */}
        <label>
          Date of Birth:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        {/* Time Input */}
        <label>
          Preferred Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        {/* Color Picker */}
        <label>
          Favorite Color:
          <input type="color" name="color" value={formData.color} onChange={handleChange} />
        </label>

        {/* Radio Buttons */}
        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} />
            Female
          </label>
        </fieldset>

        {/* Checkboxes */}
        <fieldset>
          <legend>Skills:</legend>
          <label>
            <input type="checkbox" name="skills" value="React" onChange={handleChange} checked={formData.skills.includes("React")} />
            React
          </label>
          <label>
            <input type="checkbox" name="skills" value="Angular" onChange={handleChange} checked={formData.skills.includes("Angular")} />
            Angular
          </label>
          <label>
            <input type="checkbox" name="skills" value="Vue" onChange={handleChange} checked={formData.skills.includes("Vue")} />
            Vue
          </label>
        </fieldset>

        {/* File Input */}
        <label>
          Upload File:
          <input type="file" name="file" onChange={handleChange} />
        </label>

        {/* Select Dropdown */}
        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </label>

        {/* Textarea */}
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>

        {/* Range Slider */}
        <label>
          Satisfaction Level:
          <input type="range" name="range" min="0" max="100" value={formData.range} onChange={handleChange} />
        </label>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
