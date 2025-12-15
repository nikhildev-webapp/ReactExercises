import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const[isNameSaved,setIsNameSaved]=useState(false)
  
    const saveName = (e) => {
        e.preventDefault();
        setIsNameSaved(true)
 }
 
  return (
    <>
      {/* Take name input and show 'Hello, [name]' */}
        {
              isNameSaved && name ? (
                  <p>Hello,{name}</p>
              ) : (
                 <form onSubmit={saveName}>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
              setIsNameSaved(false); 
            }}
          />
          <button type="submit" disabled={!name}>Save Name</button>
          {!isNameSaved && <p>Hello, Please Enter name</p>}
        </form>     
            )
        }
    </>
  );
};

export default SimpleForm;
