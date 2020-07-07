export const removeLocalstorageItem = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
};
