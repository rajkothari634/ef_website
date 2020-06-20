import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup } from "reactstrap";
import React, { useState } from "react";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({});
  const handleValidSubmit = (event, values) => {
    console.log(values);
  };
  return (
    <AvForm
      onValidSubmit={handleValidSubmit()}
      style={{ display: props.display === "login" ? "block" : "none" }}
    >
      <AvField name="email" label="Email *" type="text" required />
      <AvField name="password" label="Password *" required />

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

export { LoginForm };
