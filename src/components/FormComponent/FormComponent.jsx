import React from "react";
import "./FormComponent.css"; // Make sure to create a CSS file for styling.
import summitImage from "../../Assets/Images/hedaerImage.png"; // Assuming this is the image you're using.

const FormComponent = () => {
  return (
    <section id="Contactus">
    <div className="unique-form-container">
      {/* Left Section */}
      <div className="unique-left-section">
        <h1>Connect with Us—Join the Revolution</h1>
        <p>
        Feel free to reach out with any inquiries or collaborations. Whether you’re looking to host an event or just want to know more about how the Unite-to-Earn mechanism works, our team is here to guide you.
        </p>
        <img src={summitImage} alt="Summit" />
      </div>

      {/* Right Section (Form) */}
      <div className="unique-right-section">
      <form>
        <div className="unique-form-row">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="First Name" />
        </div>
  <div className="unique-form-row">

    <label htmlFor="last-name">Last Name</label>
    <input type="text" id="last-name" placeholder="Last Name" />
  </div>

  <div className="unique-form-row">
    <label htmlFor="email">Email</label>
    <input type="text" id="email" placeholder="Email" />
  </div>

  <div className="unique-form-row">
    <label htmlFor="message">Message</label>
    <textarea id="message" placeholder="Message" />
  </div>

  <div className="unique-form-row unique-checkbox-row">
    
    <label htmlFor="unique-agreement">
    <input type="checkbox" id="unique-agreement" /> I have read and I accept the terms and conditions explained in the 
      <span> Privacy Policy </span> and give my consent...
    </label>
  </div>

  <div className="unique-form-row">
    <button type="submit" className="unique-submit-btn">MESSAGE US</button>
  </div>
</form>

      </div>
    </div>
    </section>
  );
};

export default FormComponent;
