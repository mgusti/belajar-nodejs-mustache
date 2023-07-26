beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {
  beforeEach(() => console.info("Before Each Outer"));
  afterEach(() => console.info("After Each Outer"));
  test("Test Inner", () => console.info("Test Inner"));
});
