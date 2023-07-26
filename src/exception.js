export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Eko") {
    throw new MyException("Ups my exception has happened");
  } else {
    return "OK";
  }
};
