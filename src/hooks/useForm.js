import { useState } from "react";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../utils/validationUtils";

const useForm = () => {
  const [formData, setFormData] = useState({
    name: { value: "", isValid: false, error: "", edited: false },
    email: { value: "", isValid: false, error: "", edited: false },
    message: { value: "", isValid: false, error: "", edited: false },
  });

  const [submitStatus, setSubmitStatus] = useState({ message: "", type: "" });

  const validateForm = () => {
    setFormData((prevState) => ({
      ...prevState,
      name: {
        ...prevState.name,
        isValid: validateName(prevState.name.value) === "",
        error: validateName(prevState.name.value),
      },
      email: {
        ...prevState.email,
        isValid: validateEmail(prevState.email.value) === "",
        error: validateEmail(prevState.email.value),
      },
      message: {
        ...prevState.message,
        isValid: validateMessage(prevState.message.value) === "",
        error: validateMessage(prevState.message.value),
      },
    }));
  };

  const handleInputBlur = (identifier) => {
    setFormData((prevState) => ({
      ...prevState,
      [identifier]: { ...prevState[identifier], edited: true },
    }));
    validateForm();
  };

  const handleFormChange = (identifier, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [identifier]: { ...prevState[identifier], value },
    }));
    validateForm();
  };

  const resetForm = () => {
    setSubmitStatus({ message: "", type: "" });
  };

  return {
    formData,
    submitStatus,
    resetForm,
    setSubmitStatus,
    handleInputBlur,
    handleFormChange,
    validateForm,
  };
};

export default useForm;
