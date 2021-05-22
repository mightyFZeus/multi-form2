import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Succes from "./Succes";
const initialValues = {
  firstName: "",
  lastName: "",
  city: "",
  bio: "",
  occupation: "",
  email: ""
};

const FormUser = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);

  //procced to next step
  const nextStep = () => setStep((prevStep) => prevStep + 1);

  // go back to prev step

  const backStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          backStep={backStep}
          values={values}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Confirm backStep={backStep} values={values} nextStep={nextStep} />
      );
    case 4:
      return <Succes />;
    default:
      break;
  }
};

export default FormUser;
