export const validateEmail = (email: any) => {
  const regextSt = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  return regextSt.test(email);
};
