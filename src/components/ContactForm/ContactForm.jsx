import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // State to hold validation errors for each field
  const [errors, setErrors] = useState({});
  // State to manage the submission success message
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = "Name is required.";
    }

    if (!phone.trim()) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) { // Simple check for a 10-digit number
      formErrors.phone = "Phone number is invalid (must be 10 digits).";
    }

    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email format check
      formErrors.email = "Email address is invalid.";
    }

    if (!message.trim()) {
      formErrors.message = "Message cannot be empty.";
    }

    setErrors(formErrors);
    // Return true if the errors object is empty, indicating the form is valid
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmitChanges = (e) => {
    e.preventDefault();
    setIsSubmitted(false); // Clear previous success message on new submit attempt

    if (validateForm()) {
      // Form is valid, handle submission logic (e.g., send data to an API)
      console.log("Form Submitted Successfully:", { name, phone, email, message });
      // Set success state
      setIsSubmitted(true);
      // Optionally reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setErrors({}); // Clear errors on successful submit
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  return (
    <>
      <div style={{display:"flex",justifyContent:'center'}}>
        <div
          style={{
            border: "1px solid #ccc", // Changed color for better visibility
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            display: "inline-block",
            width: "300px"
          }}
        >
          <h1 style={{ textAlign: "center" }}>ContactForm</h1>
          
          {/* Success Message Display */}
          {isSubmitted && (
            <div style={{ color: 'green', backgroundColor: '#e8f5e9', padding: '10px', marginBottom: '10px', borderRadius: '5px', textAlign: 'center' }}>
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmitChanges}>
            {/* Input Name */}
            <div style={{ margin: "10px" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={{ width: "100%", padding: "5px" }}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
              {/* Error Message for Name */}
              {errors.name && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.name}</p>}
            </div>
            
            {/* Input Phone */}
            <div style={{ margin: "10px" }}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                style={{ width: "100%", padding: "5px" }}
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
              />
              {/* Error Message for Phone */}
              {errors.phone && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.phone}</p>}
            </div>
            
            {/* Input Email */}
            <div style={{ margin: "10px" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email"
                style={{ width: "100%", padding: "5px" }}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              {/* Error Message for Email */}
              {errors.email && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.email}</p>}
            </div>
            
            {/* Input Message */}
            <div style={{ margin: "10px" }}>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message here..."
                style={{ width: "100%", padding: "5px" }}
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
              ></textarea>
              {/* Error Message for Message */}
              {errors.message && <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>{errors.message}</p>}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer"
              }}
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
