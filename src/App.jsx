import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import partyImage from "./assets/party.png";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = { name: "", email: "", phone: "" };

    
    if (!formData.name) {
      formErrors.name = "Name is required.";
    }

    
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    
    if (!formData.phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("The form was submitted successfully!");
      
    }
  };

  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={partyImage} alt="Party" className="image" />
        <Header />
        <div className="content">
          <div className="h1-content">
            <h1>
              <span className="summer">summer</span>
              <span className="party">PARTY</span>
            </h1>
            <div className="form-container">
              <button className="subscribe">Subscribe</button>
              <form className="party-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


