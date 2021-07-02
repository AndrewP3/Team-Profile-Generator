const Engineer = require("../engineer");
test("employee name", () => {
  var name = "Andrew";
  var eng = new Engineer(name);
  expect(e.name).toBe(name);
});
