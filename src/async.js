export const sayHelloAsync = (name) => {
  return new Promise((resolves, rejects) => {
    setTimeout(() => {
      if (name) {
        resolves(`Hello ${name}`);
      } else {
        rejects("Name not found");
      }
    }, 1000);
  });
};

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
