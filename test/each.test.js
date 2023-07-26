import { sumAll } from "../src/sum";

const table = [
  [[], 0],
  [[10, 10], 20],
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[10, 10, 10, 10, 10, 10, 10, 10], 80],
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
