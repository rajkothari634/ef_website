import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup, CustomInput } from "reactstrap";
import React, { useState } from "react";

const RegistrationForm = (props) => {
  const [formData, setFormData] = useState({});
  const handleValidSubmit = (event, values) => {
    console.log(values);
  };
  return (
    <AvForm
      onValidSubmit={handleValidSubmit()}
      style={{ display: props.display === "signin" ? "block" : "none" }}
    >
      <AvField name="firstname" label="First Name *" type="text" required />
      <AvField name="lastname" label="Last Name *" required />
      <AvField name="email" label="Email *" type="email" required />
      <AvField
        name="password"
        label="Password"
        type="password"
        required
        validate={{
          required: {
            value: true,
            errorMessage: "Please enter a password",
          },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your name must be composed only with letter and numbers",
          },
          minLength: {
            value: 8,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
          maxLength: {
            value: 16,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
        }}
      />
      <AvField
        name="confirmpassword"
        label="Confirm Password *"
        type="password"
        required
        validate={{
          required: {
            value: true,
            errorMessage: "Please enter a password",
          },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your name must be composed only with letter and numbers",
          },
          minLength: {
            value: 8,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
          maxLength: {
            value: 16,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
        }}
      />
      <AvField
        type="select"
        name="select"
        label="Country *"
        helpMessage="Select your Country"
      >
        <option>India</option>
        <option>America</option>
        <option>Nepal</option>
        <option>Australia</option>
        <option>Russia</option>
      </AvField>
      <AvField name="company" label="Company *" required />
      <AvField
        name="phone"
        label="Phone *"
        type="text"
        required
        validate={{
          required: {
            value: true,
            errorMessage: "Please enter a numebr",
          },
          pattern: {
            value: "^[0-9]+$",
            errorMessage:
              "Your name must be composed only with letter and number",
          },
          minLength: {
            value: 12,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
          maxLength: {
            value: 12,
            errorMessage: "Your name must be between 6 and 16 characters",
          },
        }}
      />
      <AvField
        tag={CustomInput}
        type="checkbox"
        name="terms"
        label="I agree to the Terms of Service & Privacy Policy"
        required
      />
      <FormGroup>
        <Button
          style={{
            backgroundColor: "#243857",
            marginTop: "30px",
            width: "100%",
          }}
        >
          Submit
        </Button>
      </FormGroup>
    </AvForm>
  );
};

export { RegistrationForm };
