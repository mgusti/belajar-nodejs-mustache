test("array simple", () => {
  const names = ["eko", "kurniawan", "kahnnedy"];
  expect(names).toEqual(["eko", "kurniawan", "kahnnedy"]);
  expect(names).toContain("eko");
});

test("array object", () => {
  const persons = [
    {
      name: "Eko",
    },
    {
      name: "Budi",
    },
  ];
  expect(persons).toContainEqual({
    name: "Eko",
  });
});
