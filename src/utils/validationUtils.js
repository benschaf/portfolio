export const validateName = (name) => {
    if (name.trim() === "") {
      return "Name is required.";
    }
    return "";
  };

  export const validateEmail = (email) => {
    if (email.trim() === "") {
      return "Email is required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid.";
    }
    return "";
  };

  export const validateMessage = (message) => {
    if (message.trim() === "") {
      return "Message is required.";
    }
    return "";
  };