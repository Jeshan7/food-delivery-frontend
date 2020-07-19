export const removeLocalstorageItem = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
};

export const Validator = (state, type) => {
  let error = null;
  if (type === "signIn") {
    if (state.email === "" && state.password === "") {
      error = "All fields are required";
    } else if (state.password === "") {
      error = "Password is required";
    } else if (state.email === "") {
      error = "Email is required";
    }
  } else {
    if (
      state.name === "" &&
      state.email === "" &&
      state.password === "" &&
      state.repeatPassword === ""
    ) {
      error = "All fields are required";
    } else if (state.name === "") {
      error = "Name field is required";
    } else if (state.email === "") {
      error = "Email field is required";
    } else if (state.password === "") {
      error = "password field is required";
    } else if (state.repeatPassword === "") {
      error = "Repeat password field is required";
    } else if (
      state.password &&
      state.repeatPassword &&
      state.password !== state.repeatPassword
    ) {
      error = "Password do not match";
    }
  }
  return { error };
};
