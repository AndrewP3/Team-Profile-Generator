const Employee = require("../employee");
test("employee name", () => {
  var name = "Andrew";
  var e = new Employee(name);
  expect(e.name).toBe(name);
});
