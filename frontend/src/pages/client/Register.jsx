import React, { useState } from "react";
import "./Register.css";
import { ReactComponent as PersonIcon } from "../../icons/person-icon.svg";
import InputField from "../../components/InputField";
import ActionButton from "../../components/ActionButton";
import { Link } from "react-router-dom";

function Register() {
  const initialFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    reEnterPassword: "",
    addressNumber: "",
    addressStreet: "",
    addressCity: "",
    addressDistrict: "",
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFields);

  const stepOneFieldData = [
    {
      label: "first-name",
      title: "First Name",
      type: "text",
      name: "firstName",
    },
    { label: "last-name", title: "Last Name", type: "text", name: "lastName" },
    { label: "email", title: "Email", type: "email", name: "email" },
    { label: "phone", title: "Phone Number", type: "text", name: "phone" },
  ];

  const stepTwoFieldData = [
    {
      label: "password",
      title: "Password",
      type: "password",
      name: "password",
    },
    {
      label: "re-enter-password",
      title: "Re-enter Password",
      type: "password",
      name: "reEnterPassword",
    },
  ];

  const stepThreeFieldData = [
    {
      label: "address-number",
      title: "Address Number",
      type: "text",
      name: "addressNumber",
    },
    {
      label: "address-street",
      title: "Address Street",
      type: "text",
      name: "addressStreet",
    },
    {
      label: "address-city",
      title: "Address City",
      type: "text",
      name: "addressCity",
    },
    {
      label: "address-district",
      title: "Address District",
      type: "text",
      name: "addressDistrict",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="register-container">
        <div className="reg-container">
          <div className="reg-title-and-img-cont">
            <p
              style={{
                color: "#263228",
                fontSize: "20pt",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Register To Technozone
            </p>
            <PersonIcon className="reg-icon" />
          </div>

          <div className="reg-field-cont">
            {step === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    color: "#263228",
                    fontSize: "17pt",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  Let's get started
                </p>
                {stepOneFieldData.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    title={field.title}
                    type={field.type}
                    id={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    handleInputChange={handleInputChange}
                  />
                ))}
              </div>
            )}

            {step === 2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    color: "#263228",
                    fontSize: "17pt",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  Enter Password
                </p>
                {stepTwoFieldData.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    title={field.title}
                    type={field.type}
                    id={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    handleInputChange={handleInputChange}
                  />
                ))}
              </div>
            )}

            {step === 3 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    color: "#263228",
                    fontSize: "17pt",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  Enter Address
                </p>
                {stepThreeFieldData.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    title={field.title}
                    type={field.type}
                    id={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    handleInputChange={handleInputChange}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="reg-button-cont">
            {step === 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <ActionButton
                  onTap={nextStep}
                  buttonText="Next"
                  height="3.5vh"
                  fontSize="17pt"
                />
              </div>
            )}
            {step === 2 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <ActionButton
                  onTap={prevStep}
                  buttonText="Back"
                  height="3.5vh"
                  fontSize="17pt"
                />
                <ActionButton
                  onTap={nextStep}
                  buttonText="Next"
                  height="3.5vh"
                  fontSize="17pt"
                />
              </div>
            )}

            {step === 3 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <ActionButton
                  onTap={prevStep}
                  buttonText="Back"
                  height="3.5vh"
                  fontSize="17pt"
                />
                <ActionButton
                  onTap={submitForm}
                  buttonText="Done"
                  height="3.5vh"
                  fontSize="17pt"
                />
              </div>
            )}
          </div>

          <div className="reg-step-and-text-cont">
            <div className="step-indicator">
              <div className={`step-dot ${step === 1 ? "active" : ""}`}></div>
              <div className={`step-dot ${step === 2 ? "active" : ""}`}></div>
              <div className={`step-dot ${step === 3 ? "active" : ""}`}></div>
            </div>
            <p
              style={{
                marginTop: "10px",
                color: "grey",
                margin: "5px 0",
              }}
            >
              Already have an account?{" "}
              <Link to="/login" style={{ color: "var(--bg-accent)" }}>
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

// function Test() {
//   return (
//     <div>

//   {step === 2 && (
//     <div>
//       <h2>Step 2: Create Password</h2>
//       <form>
//         {/* Password and Confirm Password input fields */}
//         <button onClick={prevStep}>Back</button>
//         <button onClick={nextStep}>Next</button>
//       </form>
//     </div>
//   )}
//   {step === 3 && (
//     <div>
//       <h2>Step 3: Address Details</h2>
//       <form>
//         {/* Address input field */}
//         <button onClick={prevStep}>Back</button>
//         <button onClick={submitForm}>Done</button>
//       </form>
//     </div>
//   )}</div>
//   )
// }
