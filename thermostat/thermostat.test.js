const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("calls up function twice and returns temperture", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
});
