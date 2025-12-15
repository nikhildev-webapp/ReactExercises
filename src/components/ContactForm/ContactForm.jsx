import React from "react";

const ContactForm = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:'center'}}>
        <div
          style={{
            border: "1px solid #fff",
            padding: "20px",
            margin: "10px",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          <h1 style={{ textAlign: "center" }}>ContactForm</h1>
          <form>
            <div style={{ margin: "10px" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={{ width: "150px" }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter you phone number"
                style={{ width: "150px" }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter you Email"
                style={{ width: "150px" }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter you message here..."
              ></textarea>
            </div>
            <button
              style={{
                border: "1px solid #fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              ContactMe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
