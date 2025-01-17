import React, { useState } from "react";
import axios from "axios";
import "./manage.css";

export default function Cource() {
  // State to store form data
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://your-backend-url/api/questions", formData);
      alert("Question submitted successfully!");
      console.log(response.data);

      // Clear the form after submission
      setFormData({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("Failed to submit question. Please try again.");
    }
  };

  return (
    <div className="manage">
      {/* Container */}
      <div className="c1">
        {/* Heading */}
        <h1 className="heading">Manage Questions</h1>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            className="textboxes"
            type="text"
            name="question"
            value={formData.question}
            placeholder="Enter Question here"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="textboxes"
            type="text"
            name="option1"
            value={formData.option1}
            placeholder="Option 1"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="textboxes"
            type="text"
            name="option2"
            value={formData.option2}
            placeholder="Option 2"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="textboxes"
            type="text"
            name="option3"
            value={formData.option3}
            placeholder="Option 3"
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="textboxes"
            type="text"
            name="option4"
            value={formData.option4}
            placeholder="Option 4"
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit" className="bt1">
            Submit Questions
          </button>
        </form>
        <br/>
        <p></p>
      </div>
    </div>
  );
}
