const Intern = require("../intern");
test("employee name", () => {
  var name = "Andrew";
  var i = new Intern(name);
  expect(e.name).toBe(name);
});
