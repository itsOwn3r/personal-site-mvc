export const isEmailValid = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAarn-zA-Z]{2,}$/;
    return regex.test(email);
  }