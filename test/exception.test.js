import { MyException, callMe } from "../src/exception.js";

test("exception", () => {
  expect(() => callMe("Eko")).toThrow();
  expect(() => callMe("Eko")).toThrow(MyException);
  expect(() => callMe("Eko")).toThrow("Ups my exception has happened");
});

test("exception not happened", () => {
  expect(callMe("Budi")).toBe("OK");
});
