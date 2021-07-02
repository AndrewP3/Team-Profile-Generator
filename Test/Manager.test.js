const Engineer = require("../manager");
test("employee name", () => {
  var name = "Andrew";
  var m = new Engineer(name);
  expect(e.name).toBe(name);
});
